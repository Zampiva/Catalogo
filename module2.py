# app.py

from flask_jwt_extended import jwt_required

@app.route('/admin/dashboard', methods=['GET'])
@jwt_required()
def admin_dashboard():
    current_user = get_jwt_identity()
    return jsonify({"msg": f"Olá, {current_user}! Bem-vindo ao painel administrativo."}), 200



