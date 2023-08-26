// import request from 'supertest';
import axios from 'axios';
// import app from '../routes/general.route';


const url = 'http://127.0.0.1:5000';


describe('GET /', () => {
    test('responds from root url', async () => {
        const res = await axios.get(url)

        expect(res).toBeTruthy()
        expect(res.status).toBe(200)
        expect(res.data).toMatch(/^Response from backend at/);
    },20000);
});