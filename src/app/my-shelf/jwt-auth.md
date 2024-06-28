---
title: "Understanding JSON Web Tokens (JWT): A Secure Approach to Web Authentication"
date: "January 01, 2024"
---


A JSON Web Token (JWT) is a compact and self-contained way for securely transmitting information between parties as a JSON object. It's commonly used for authentication and information exchange in web applications. Here's a brief overview of how JWTs work and their components:

### Components of a JWT

1. **Header**: Contains metadata about the type of token and the hashing algorithm used.

   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload**: Contains claims, which are statements about an entity (typically the user) and additional data.

   ```json
   {
     "sub": "1234567890",
     "name": "John Doe",
     "admin": true
   }
   ```

   Commonly used claims:
   - `iss` (issuer): Issuer of the token.
   - `sub` (subject): Subject of the token (typically the user ID).
   - `exp` (expiration time): Token expiration time.
   - `iat` (issued at): Token issue time.
   - `aud` (audience): Who the token is intended for.
   - Custom claims as needed by your application.

3. **Signature**: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a signature is created using the encoded header, the encoded payload, a secret key, and the specified algorithm.

### Using JWTs

1. **Creating a JWT**:
   - Combine the header and payload into a JSON string.
   - Encode the JSON string using Base64Url encoding.
   - Create the signature using the encoded header, encoded payload, secret key, and specified algorithm (e.g., HMAC SHA256).

2. **Sending the JWT**:
   - Typically, JWTs are sent in the `Authorization` header using the `Bearer` scheme:

     ```
     Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9[...] 
     ```

3. **Verifying and Decoding**:
   - On the server side, verify the JWT by:
     - Splitting the JWT into header, payload, and signature.
     - Recomputing the signature using the header, payload, secret key, and algorithm.
     - Comparing the computed signature with the received signature to validate the token.

### Example
Here's a simplified example of a JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidXNlcm5hbWUiOiJqb2huZG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

In this JWT:
- **Header**: `{"alg": "HS256", "typ": "JWT"}`
- **Payload**: `{"sub": "1234567890", "name": "John Doe", "username": "john.doe", "admin": true}`
- **Signature**: Created using the algorithm `HS256` with a secret key.

JWTs are flexible and widely used due to their compact size, ease of parsing by browsers and servers, and ability to contain custom claims relevant to your application's needs.
