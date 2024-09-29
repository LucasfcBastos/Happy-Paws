from flask import Flask, request, jsonify, send_from_directory
import pandas as pd
from datetime import datetime
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

EXCEL_FILE = os.path.join(os.getcwd(), "dados_animais.xlsx")

UPLOAD_FOLDER = os.path.join(app.static_folder, 'uploads')
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/create')
def create():
    return send_from_directory('templates', 'create.html')

@app.route('/view')
def view():
    return send_from_directory('templates', 'view.html')

@app.route('/details')
def details():
    return send_from_directory('templates', 'details.html')

@app.route('/api/save-animal', methods=['POST'])
def save_animal():
    try:
        photo = request.files['photo']
        name = request.form.get('name')
        sex = request.form.get('sex')
        types = request.form.get('types')
        owner = request.form.get('owner')

        photo_filename = f"{name}_{datetime.now().strftime('%Y%m%d%H%M%S')}.png"
        photo_path = os.path.join(UPLOAD_FOLDER, photo_filename)
        photo.save(photo_path)
        
        new_animal = {
            'photo': photo_filename,
            'name': name,
            'sex': sex,
            'types': types,
            'owner': owner,
            'latest_update': datetime.now().strftime('%d/%m/%Y - %H:%M'),
            'age': request.form.get('age', ''),
            'race': request.form.get('race', ''),
            'phone': request.form.get('phone', ''),
            'city': request.form.get('city', ''),
            'address': request.form.get('address', ''),
            'description': request.form.get('description', '')
        }

        if os.path.exists(EXCEL_FILE):
            df = pd.read_excel(EXCEL_FILE, dtype=str)
        else:
            df = pd.DataFrame(columns=['ID_animal', 'photo', 'name', 'age', 'sex', 'types', 'race', 'owner', 'phone', 'city', 'address', 'description', 'latest_update'])
        
        new_id = len(df) + 1
        new_animal['ID_animal'] = new_id
        new_row = pd.DataFrame([new_animal])

        df = pd.concat([df, new_row], ignore_index=True)
        df.to_excel(EXCEL_FILE, index=False)

        return jsonify({'message': 'Animal cadastrado com sucesso!'})
    
    except Exception as e:
        return jsonify({'error': f"Erro ao salvar no Excel: {str(e)}"})

@app.route('/animais')
def get_animais():
    try:
        df = pd.read_excel(EXCEL_FILE)
        df.fillna('', inplace=True)
        animais = df.to_dict(orient='records')
        return jsonify(animais)
    except Exception as e: 
        return jsonify({'error': f"Erro ao ler os dados dos animais: {str(e)}"})

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/animal/<int:animal_id>', methods=['GET'])
def get_animal(animal_id):
    try:
        df = pd.read_excel(EXCEL_FILE)
        df.fillna('', inplace=True)
        animal = df[df['ID_animal'] == animal_id].to_dict(orient='records')
        if animal:
            return jsonify(animal[0])
        else:
            return jsonify({'error': 'animal not found'}), 404
    except Exception as e:
        return jsonify({'error': f"error reading animal data: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
