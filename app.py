from flask import Flask, request, jsonify, send_file, render_template, send_from_directory
import pandas as pd
from datetime import datetime
import os

app = Flask(__name__, static_folder='')

DATA_FILE = 'data.xlsx'
UPLOAD_FOLDER = 'uploads'

# Certifica-se de que o diretório de uploads exista
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Rota para servir o index.html ao acessar a raiz
@app.route('/')
def index():
    return send_from_directory('', 'index.html')

# Rota para servir outros arquivos estáticos, como CSS, JS, e imagens
@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('', path)

@app.route('/add_animal', methods=['POST'])
def add_animal():
    nome = request.form['nome']
    idade = request.form['idade']
    sexo = request.form['sexo']
    tipo = request.form['tipo']
    foto = request.files['foto']
    dono = request.form['dono']
    telefone = request.form['telefone']
    descricao = request.form['descricao']
    endereco = request.form['endereco']

    # Salvando a foto
    foto_filename = os.path.join(UPLOAD_FOLDER, f'{nome}_{datetime.now().strftime("%Y%m%d%H%M%S")}.png')
    foto.save(foto_filename)

    # Salvando os dados no Excel
    new_data = pd.DataFrame({
        "Nome": [nome],
        "Idade": [idade],
        "Sexo": [sexo],
        "Tipo": [tipo],
        "Foto": [foto_filename],
        "Dono": [dono],
        "Telefone": [telefone],
        "Descrição": [descricao],
        "Endereço": [endereco],
        "Data Atualização": [datetime.now().strftime("%Y-%m-%d %H:%M:%S")]
    })

    if os.path.exists(DATA_FILE):
        df = pd.read_excel(DATA_FILE)
        df = pd.concat([df, new_data], ignore_index=True)
    else:
        df = new_data

    df.to_excel(DATA_FILE, index=False)

    return jsonify({"message": "Animal cadastrado com sucesso!"}), 200

@app.route('/get_animals', methods=['GET'])
def get_animals():
    if os.path.exists(DATA_FILE):
        df = pd.read_excel(DATA_FILE)
        return df.to_dict(orient="records"), 200
    else:
        return jsonify([]), 200

@app.route('/get_animal/<nome>', methods=['GET'])
def get_animal(nome):
    if os.path.exists(DATA_FILE):
        df = pd.read_excel(DATA_FILE)
        animal = df[df['Nome'] == nome].to_dict(orient="records")
        if animal:
            return jsonify(animal[0]), 200
    return jsonify({"error": "Animal não encontrado"}), 404

@app.route('/update_animal/<nome>', methods=['POST'])
def update_animal(nome):
    if os.path.exists(DATA_FILE):
        df = pd.read_excel(DATA_FILE)
        for index, row in df.iterrows():
            if row['Nome'] == nome:
                df.at[index, 'Idade'] = request.form['idade']
                df.at[index, 'Sexo'] = request.form['sexo']
                df.at[index, 'Tipo'] = request.form['tipo']
                df.at[index, 'Dono'] = request.form['dono']
                df.at[index, 'Telefone'] = request.form['telefone']
                df.at[index, 'Descrição'] = request.form['descricao']
                df.at[index, 'Endereço'] = request.form['endereco']
                df.at[index, 'Data Atualização'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                df.to_excel(DATA_FILE, index=False)
                return jsonify({"message": "Animal atualizado com sucesso!"}), 200
    return jsonify({"error": "Animal não encontrado"}), 404

@app.route('/delete_animal/<nome>', methods=['DELETE'])
def delete_animal(nome):
    if os.path.exists(DATA_FILE):
        df = pd.read_excel(DATA_FILE)
        df = df[df['Nome'] != nome]
        df.to_excel(DATA_FILE, index=False)
        return jsonify({"message": "Animal excluído com sucesso!"}), 200
    return jsonify({"error": "Animal não encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True)