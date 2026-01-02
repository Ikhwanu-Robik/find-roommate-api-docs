window.apiDocs = {
  openapi: "3.0.0",
  info: {
    title: "Find Roommate API",
    description:
      "Find Roommate is a platform for you to find a roommate, mainly to share the lodging's rent because who can afford rent alone in this economy?",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://{{baseurl}}/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  paths: {
    "/login": {
      post: {
        tags: ["default"],
        summary: "login",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  phone: {
                    type: "string",
                    description:
                      '(Required)\n(Must match regex "^08[1-9]{1}\\d{1}-{1}\\d{4}-\\d{2,5}$" )',
                    example: "<string>",
                  },
                  password: {
                    type: "string",
                    description: "(Required)",
                    example: "<string>",
                  },
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 06:27:48 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  user: {
                    id: 11,
                    name: "Ananda Rafael",
                    created_at: "2026-01-02T06:18:52.000000Z",
                    updated_at: "2026-01-02T06:18:52.000000Z",
                    phone: "0812-1000-0000",
                    profile_id: 10,
                    profile_type: "App\\Models\\CustomerProfile",
                    profile: {
                      id: 10,
                      full_name: "Ananda Rafael",
                      gender: "male",
                      birthdate: "2007-08-01",
                      address: "Paranggupito",
                      bio: "Ibadah, berdoa, dan solat pada Tuhan",
                      profile_photo:
                        "profile_pics/QZCZS6kmi17jfZUvxRlxmndqsoTG6o1P6xFdrCPw.jpg",
                      created_at: "2026-01-02T06:18:52.000000Z",
                      updated_at: "2026-01-02T06:18:52.000000Z",
                    },
                  },
                  token: "5|WThtIusE4oFG7we4Q1x16rEftqP6brDcEhusNeR7bbb4d844",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Host: {
                schema: {
                  type: "number",
                  example: "127.0.0.1:8000",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "close",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Wed, 03 Dec 2025 00:42:53 GMT",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "The credentials do not match our record",
                },
              },
            },
          },
          422: {
            description: "Unprocessable Content",
            headers: {
              Host: {
                schema: {
                  type: "number",
                  example: "127.0.0.1:8000",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "close",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Wed, 03 Dec 2025 00:38:26 GMT",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "The phone field is required. (and 1 more error)",
                  errors: {
                    phone: ["The phone field is required."],
                    password: ["The password field is required."],
                  },
                },
              },
            },
          },
        },
      },
    },
    "/logout": {
      post: {
        tags: ["default"],
        summary: "logout",
        requestBody: {
          content: {},
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 14 Dec 2025 11:01:41 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Logout successful",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Host: {
                schema: {
                  type: "number",
                  example: "127.0.0.1:8000",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "close",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Wed, 03 Dec 2025 00:45:37 GMT",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Unauthenticated.",
                },
              },
            },
          },
        },
      },
    },
    "/signup": {
      post: {
        tags: ["default"],
        summary: "signup",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "(Required)",
                    example: "<string>",
                  },
                  phone: {
                    type: "string",
                    description:
                      '(Required)\n(Must match regex "^08[1-9]{1}\\d{1}-{1}\\d{4}-\\d{2,5}$" )',
                    example: "<string>",
                  },
                  password: {
                    type: "string",
                    description: "(Required) ",
                    example: "<string>",
                  },
                  birthdate: {
                    type: "string",
                    description:
                      "(Required) \n(Year-Month-Date)\n(Must be past date)",
                    example: "<date string>",
                  },
                  gender: {
                    type: "string",
                    description: '(Required) \n(Must be "male" or "female")',
                    example: "<string>",
                  },
                  address: {
                    type: "string",
                    description: "(Required) ",
                    example: "<string>",
                  },
                  bio: {
                    type: "string",
                    description: "(Required) ",
                    example: "<string>",
                  },
                  profile_photo: {
                    type: "string",
                    description: "(Required) \n(Image)",
                    format: "binary",
                  },
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "Content-Type",
            in: "header",
            schema: {
              type: "string",
            },
            example: "multipart/form-data",
          },
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 06:18:46 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                examples: {
                  "example-0": {
                    summary: "Successful",
                    value: {
                      user: {
                        name: "Ananda Rafael",
                        phone: "0812-1000-0000",
                        updated_at: "2026-01-02T06:18:52.000000Z",
                        created_at: "2026-01-02T06:18:52.000000Z",
                        id: 11,
                        profile_id: 10,
                        profile_type: "App\\Models\\CustomerProfile",
                        profile: {
                          id: 10,
                          full_name: "Ananda Rafael",
                          gender: "male",
                          birthdate: "2007-08-01",
                          address: "Paranggupito",
                          bio: "Ibadah, berdoa, dan solat pada Tuhan",
                          profile_photo:
                            "profile_pics/QZCZS6kmi17jfZUvxRlxmndqsoTG6o1P6xFdrCPw.jpg",
                          created_at: "2026-01-02T06:18:52.000000Z",
                          updated_at: "2026-01-02T06:18:52.000000Z",
                        },
                      },
                    },
                  },
                  "example-1": {
                    summary: "Successful, but image storage failed",
                    value: {
                      user: {
                        name: "Anselm Awrik",
                        phone: "0812-1000-0001",
                        updated_at: "2026-01-02T06:23:12.000000Z",
                        created_at: "2026-01-02T06:23:12.000000Z",
                        id: 12,
                        profile_id: 11,
                        profile_type: "App\\Models\\CustomerProfile",
                        profile: {
                          id: 11,
                          full_name: "Anselm Awrik",
                          gender: "male",
                          birthdate: "2007-08-03",
                          address: "Paranggupito",
                          bio: "Ibadah, berdoa, dan solat pada Tuhan",
                          profile_photo:
                            "profile_pics/V2F1p8YjAVomhnCAwbwVOb2vE3etWkVymEiImYvr.jpg",
                          created_at: "2026-01-02T06:23:12.000000Z",
                          updated_at: "2026-01-02T06:23:12.000000Z",
                        },
                      },
                      message:
                        "Signup successful, but image storage failed. You can try again in the profile menu",
                    },
                  },
                },
              },
            },
          },
          422: {
            description: "Unprocessable Entity (WebDAV) (RFC 4918)",
            headers: {
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "The name field is required. (and 7 more errors)",
                  errors: {
                    name: ["The name field is required."],
                    phone: ["The phone field is required."],
                    password: ["The password field is required."],
                    birthdate: ["The birthdate field is required."],
                    gender: ["The gender field is required."],
                    address: ["The address field is required."],
                    bio: ["The bio field is required."],
                    profile_photo: ["The profile photo field is required."],
                  },
                },
              },
            },
          },
        },
      },
    },
    "/listing": {
      post: {
        tags: ["default"],
        summary: "join profiles recommendation listing",
        description:
          "After sending this request, the current user will be searchable in profiles recommendation.\n\nSending it again will update the lodging_id.",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  lodging_id: {
                    type: "integer",
                    description:
                      "(Required)\n(Correspond to existing Lodging's id)",
                    example: "3",
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 06:54:17 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  profile_in_listing: {
                    id: 8,
                    customer_profile_id: 10,
                    lodging_id: 3,
                    created_at: "2026-01-02T06:51:25.000000Z",
                    updated_at: "2026-01-02T06:51:25.000000Z",
                    customer_profile: {
                      id: 10,
                      full_name: "Ananda Rafael",
                      gender: "male",
                      birthdate: "2007-08-01",
                      address: "Paranggupito",
                      bio: "Ibadah, berdoa, dan solat pada Tuhan",
                      profile_photo:
                        "profile_pics/QZCZS6kmi17jfZUvxRlxmndqsoTG6o1P6xFdrCPw.jpg",
                      created_at: "2026-01-02T06:18:52.000000Z",
                      updated_at: "2026-01-02T06:18:52.000000Z",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 06:49:53 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Unauthenticated.",
                },
              },
            },
          },
          422: {
            description: "Unprocessable Content",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 06:50:22 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "The lodging id field is required.",
                  errors: {
                    lodging_id: ["The lodging id field is required."],
                  },
                },
              },
            },
          },
        },
      },
    },
    "/match/profiles-recommendation": {
      get: {
        tags: ["default"],
        summary: "match profiles recommendation",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
          {
            name: "gender",
            in: "query",
            schema: {
              type: "string",
            },
            description: "(Required)\n(male/female)",
            example: "<string>",
          },
          {
            name: "min_age",
            in: "query",
            schema: {
              type: "string",
            },
            description: "(Required)\n(Integer)\n(>=17)",
            example: "<integer>",
          },
          {
            name: "max_age",
            in: "query",
            schema: {
              type: "string",
            },
            description: "(Required)\n(Integer)\n(>=min_age)",
            example: "<integer>",
          },
          {
            name: "lodging_id",
            in: "query",
            schema: {
              type: "string",
            },
            description: "(Required)\n(Correspond to existing Lodging's id)",
            example: "<integer>",
          },
          {
            name: "bio",
            in: "query",
            schema: {
              type: "string",
            },
            description: "(Required)",
            example: "<string>",
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 14 Dec 2025 10:43:46 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                examples: {
                  "example-0": {
                    summary: "No Matching Profiles",
                    value: {
                      matching_profiles: [],
                    },
                  },
                  "example-1": {
                    summary: "Successful",
                    value: {
                      matching_profiles: [
                        {
                          id: 2,
                          customer_profile_id: 24,
                          lodging_id: 1,
                          created_at: "2025-12-14T10:57:00.000000Z",
                          updated_at: "2025-12-14T10:57:00.000000Z",
                          customer_profile: {
                            id: 24,
                            full_name: "Elenora Klein",
                            gender: "male",
                            birthdate: "1999-07-03",
                            address:
                              "512 O'Conner Flat Apt. 922\nPort Wilma, MA 83120-0502",
                            bio: "The Hatter was out of his teacup and bread-and-butter, and then hurried on, Alice started to her that she had looked under it, and kept doubling itself up very sulkily and crossed over to herself.",
                            profile_photo: null,
                            created_at: "2025-12-14T10:57:00.000000Z",
                            updated_at: "2025-12-14T10:57:00.000000Z",
                          },
                          lodging: {
                            id: 1,
                            name: "Baumbach's Lodging",
                            latitude: -57.675973,
                            longitude: 101.849931,
                            created_at: "2025-12-14T08:31:01.000000Z",
                            updated_at: "2025-12-14T08:31:01.000000Z",
                          },
                        },
                        {
                          id: 9,
                          customer_profile_id: 31,
                          lodging_id: 1,
                          created_at: "2025-12-14T10:57:00.000000Z",
                          updated_at: "2025-12-14T10:57:00.000000Z",
                          customer_profile: {
                            id: 31,
                            full_name: "Mr. Evie Emmerich DVM",
                            gender: "male",
                            birthdate: "1983-10-24",
                            address:
                              "47277 Edna Via Apt. 724\nEast Inesmouth, MI 66387",
                            bio: "And concluded the banquet--] 'What IS the use of a well--' 'What did they live at the bottom of a water-well,' said the Gryphon. 'Then, you know,' said the Hatter. 'He won't stand beating. Now, if.",
                            profile_photo: null,
                            created_at: "2025-12-14T10:57:00.000000Z",
                            updated_at: "2025-12-14T10:57:00.000000Z",
                          },
                          lodging: {
                            id: 1,
                            name: "Baumbach's Lodging",
                            latitude: -57.675973,
                            longitude: 101.849931,
                            created_at: "2025-12-14T08:31:01.000000Z",
                            updated_at: "2025-12-14T08:31:01.000000Z",
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 14 Dec 2025 08:39:27 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Unauthenticated.",
                },
              },
            },
          },
          422: {
            description: "Unprocessable Content",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 14 Dec 2025 10:45:08 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=99",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message:
                    "The gender must be either male or female (and 4 more errors)",
                  errors: {
                    gender: ["The gender must be either male or female"],
                    min_age: ["The min age field must be at least 17."],
                    max_age: [
                      "The max age field must be greater than or equal to 15.",
                    ],
                    lodging_id: ["The selected lodging id is invalid."],
                    bio: ["The bio field is required."],
                  },
                },
              },
            },
          },
        },
      },
    },
    "/match/profiles/{customer_profile_id}/chat": {
      post: {
        tags: ["default"],
        summary: "initiate chat room with user",
        description:
          "The {customer_profile_id} can be obtained from profiles recommendation",
        requestBody: {
          content: {},
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
          {
            name: "customer_profile_id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:26:53 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  chat_room_id: 2,
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:23:56 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Unauthenticated.",
                },
              },
            },
          },
        },
      },
    },
    "/chat-rooms/{chat_room_id}/chats": {
      post: {
        tags: ["default"],
        summary: "send a chat",
        description:
          "The {chat_room_id} can be obtained after initiating a chat room with user.",
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    description: "(Required)",
                    example: "Hey, what's up!",
                  },
                },
              },
            },
          },
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "Accept",
            in: "header",
            schema: {
              type: "string",
            },
            example: "application/json",
          },
          {
            name: "chat_room_id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:33:06 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "text/html; charset=utf-8",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example: "",
              },
            },
          },
          401: {
            description: "Unauthorized",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:28:59 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "Unauthenticated.",
                },
              },
            },
          },
          403: {
            description: "Forbidden",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:32:41 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "You are not invited to this chat room",
                },
              },
            },
          },
          422: {
            description: "Unprocessable Content",
            headers: {
              Date: {
                schema: {
                  type: "string",
                  example: "Fri, 02 Jan 2026 07:29:56 GMT",
                },
              },
              Server: {
                schema: {
                  type: "number",
                  example:
                    "Apache/2.4.54 (Win64) OpenSSL/1.1.1q mod_fcgid/2.3.10-dev",
                },
              },
              "X-Powered-By": {
                schema: {
                  type: "number",
                  example: "PHP/8.3.13",
                },
              },
              "Cache-Control": {
                schema: {
                  type: "string",
                  example: "no-cache, private",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              Vary: {
                schema: {
                  type: "string",
                  example: "Authorization",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5, max=100",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "Keep-Alive",
                },
              },
              "Transfer-Encoding": {
                schema: {
                  type: "string",
                  example: "chunked",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json",
                },
              },
            },
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
                example: {
                  message: "The message field is required.",
                  errors: {
                    message: ["The message field is required."],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
