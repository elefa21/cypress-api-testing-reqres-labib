# Tugas 18 - API Testing Reqres dengan Cypress

Pada tugas ini, saya mempelajari dan menerapkan pengujian API (Application Programming Interface) menggunakan Cypress.

Website yang diuji: [https://reqres.in/](https://reqres.in/)  
API Key: `reqres-free-v1` (diberikan oleh Reqres)

## Tools
- Cypress
- Reqres API

## Test Case yang Diuji

1. GET List Users
2. GET Single User
3. GET Single User Not Found
4. POST Create User
5. PUT Update User
6. PATCH Update User
7. DELETE User
8. POST Register (Sukses)
9. POST Register (Gagal)
10. POST Login (Sukses)

Semua request telah menggunakan `x-api-key` agar authorized dan dapat dijalankan tanpa error.

## Cara Menjalankan

```bash
npx cypress open
