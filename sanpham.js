
const API_TOKEN = 'YOUR_API_TOKEN';
const API_SECRET = 'YOUR_API_SECRET';
const BASE_URL = 'https://carapi.app/api';

async function fetchAndDisplayCars() {
    const container = document.getElementById('car-container');

    try {
        // 1. Lấy JWT Token
        const authRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_token: API_TOKEN, api_secret: API_SECRET })
        });
        const jwtToken = await authRes.text();

        // 2. Lấy dữ liệu xe (ví dụ lấy 12 mẫu xe mới nhất)
        const dataRes = await fetch(`${BASE_URL}/models?limit=12`, {
            headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const result = await dataRes.json();

        // 3. Xóa dòng chữ "Đang tải" và hiển thị dữ liệu
        container.innerHTML = '';

        result.data.forEach(model => {
            const card = document.createElement('div');
            card.className = 'car-card';
            card.innerHTML = `
                        <span class="badge">${model.make.name}</span>
                        <h3>${model.name}</h3>
                        <p><strong>Dòng xe:</strong> ${model.body_style || 'N/A'}</p>
                        <p><strong>ID:</strong> # ${model.id}</p>
                    `;
            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `<p style="color:red;">Lỗi kết nối: ${error.message}</p>`;
    }
}

fetchAndDisplayCars();
