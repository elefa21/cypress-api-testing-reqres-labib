describe("Tugas 18 - API Testing with Cypress (Authorized)", () => {
  const baseUrl = "https://reqres.in/api";
  const apiKey = "reqres-free-v1";

  const headers = {
    "x-api-key": apiKey,
  };

  it("TC1 - GET List Users", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users?page=2`,
      headers,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });

  it("TC2 - GET Single User", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2`,
      headers,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);
    });
  });

  it("TC3 - GET Single User Not Found", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/23`,
      headers,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("TC4 - POST Create User", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers,
      body: {
        name: "labib",
        job: "QA Engineer",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name", "labib");
      expect(response.body).to.have.property("job", "QA Engineer");
      expect(response.body).to.have.property("id");
    });
  });

  it("TC5 - PUT Update User", () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/users/2`,
      headers,
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "morpheus");
      expect(response.body).to.have.property("job", "zion resident");
      expect(response.body).to.have.property("updatedAt");
    });
  });

  it("TC6 - PATCH Update User", () => {
    cy.request({
      method: "PATCH",
      url: `${baseUrl}/users/2`,
      headers,
      body: {
        job: "zion manager",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("job", "zion manager");
    });
  });

  it("TC7 - DELETE User", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/users/2`,
      headers,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it("TC8 - POST Register (Sukses)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });

  it("TC9 - POST Register (Gagal)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      failOnStatusCode: false,
      body: {
        email: "sydney@fife",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
    });
  });

  it("TC10 - POST Login (Sukses)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/login`,
      headers,
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
    });
  });
});
