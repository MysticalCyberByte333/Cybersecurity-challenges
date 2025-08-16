# 🔐 Cryptography Challenges

This directory contains challenges focused on identifying and breaking encryption or obfuscated messages using appropriate tools and techniques.

## 🎯 Challenge Overview

Cryptography challenges test your ability to:
- Identify different types of encryption and hashing algorithms
- Break classical and modern ciphers
- Analyze cryptographic implementations
- Detect and extract hidden information
- Understand cryptographic attacks
- Work with certificates and keys

## 🏆 Difficulty Levels

### 🟢 Beginner (100-200 points)
- Basic cipher identification
- Simple substitution ciphers
- Common hash identification
- Basic frequency analysis

### 🟡 Intermediate (300-500 points)
- Modern encryption algorithms
- Hash cracking with tools
- Steganography detection
- Certificate analysis
- Custom cryptographic attacks

### 🔴 Advanced (600-1000 points)
- Advanced cryptographic attacks
- Custom cipher development
- Zero-knowledge proofs
- Quantum cryptography concepts
- Advanced steganography

## 📋 Challenge List

### Challenge 1: Classical Cipher Analysis (Beginner - 150 points)
**Description:** Decrypt messages using classical cryptographic techniques.

**Scenario:** You've intercepted several encrypted messages that appear to use classical ciphers.

**Tasks:**
1. Identify the type of cipher used in each message
2. Determine the key or pattern used
3. Decrypt the following messages:
   - Message 1: "KHOOR ZRUOG"
   - Message 2: "GUVF VF N FRQIXVLQJ PHVVDJH"
   - Message 3: "JRRG OXFN ZLWK WKH FKDOOHQJH"

**Tools Needed:**
- Frequency analysis tools
- Substitution cipher solvers
- Vigenère cipher tools
- Custom Python scripts

**Flag Format:** `NCL{decrypted_message_1_decrypted_message_2_decrypted_message_3}`

---

### Challenge 2: Hash Identification and Cracking (Intermediate - 350 points)
**Description:** Identify hash types and crack passwords using various techniques.

**Scenario:** You've recovered several password hashes from a compromised system and need to crack them.

**Tasks:**
1. Identify the hash type for each of the following:
   - `5f4dcc3b5aa765d61d8327deb882cf99`
   - `$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi`
   - `$6$rounds=5000$salt$hash`
   - `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`

2. Crack each hash to reveal the plaintext password
3. Identify the hashing algorithm used
4. Determine the salt used (if applicable)

**Tools Needed:**
- Hashcat
- John the Ripper
- Online hash databases
- Hash identification tools

**Flag Format:** `NCL{password1_password2_password3_algorithm}`

---

### Challenge 3: Steganography Detection (Intermediate - 400 points)
**Description:** Find hidden information in various file types using steganography techniques.

**Scenario:** You suspect that sensitive information has been hidden in image and audio files.

**Tasks:**
1. Analyze the provided image file "suspicious_image.png"
2. Extract any hidden data using steganography tools
3. Check for hidden text, files, or other data
4. Analyze the audio file "secret_message.wav"
5. Extract any hidden information from the audio
6. Identify the steganography technique used

**Tools Needed:**
- Steghide
- Binwalk
- Strings
- Audacity
- Custom steganography tools

**Flag Format:** `NCL{hidden_text_from_image_hidden_text_from_audio}`

---

### Challenge 4: Certificate Analysis and Attacks (Advanced - 600 points)
**Description:** Analyze SSL/TLS certificates and perform cryptographic attacks.

**Scenario:** You've captured SSL/TLS traffic and need to analyze the certificates and potentially break the encryption.

**Tasks:**
1. Extract and analyze the SSL certificate from the provided traffic capture
2. Identify the certificate's key algorithm and strength
3. Check for any certificate vulnerabilities
4. Attempt to break weak encryption if present
5. Analyze the certificate chain
6. Identify any misconfigurations

**Tools Needed:**
- OpenSSL
- Wireshark
- Certificate analysis tools
- Custom cryptographic scripts

**Flag Format:** `NCL{certificate_algorithm_key_strength_vulnerability}`

---

### Challenge 5: Advanced Cryptographic Attack (Advanced - 800 points)
**Description:** Perform advanced cryptographic attacks on custom implementations.

**Scenario:** You've discovered a custom encryption implementation that may have vulnerabilities.

**Tasks:**
1. Analyze the provided encryption algorithm
2. Identify potential vulnerabilities
3. Implement a chosen plaintext attack
4. Break the encryption to recover the key
5. Decrypt the target message
6. Document the attack methodology

**Tools Needed:**
- Python with cryptographic libraries
- Custom attack scripts
- Mathematical analysis tools
- Cryptanalysis frameworks

**Flag Format:** `NCL{recovered_key_decrypted_message}`

---

### Challenge 6: Modern Encryption Challenge (Advanced - 900 points)
**Description:** Work with modern encryption algorithms and protocols.

**Scenario:** Analyze and potentially break modern cryptographic implementations.

**Tasks:**
1. Identify the encryption algorithm used
2. Analyze the key exchange mechanism
3. Check for implementation flaws
4. Attempt to break the encryption
5. Recover the plaintext
6. Document any vulnerabilities found

**Tools Needed:**
- Advanced cryptographic tools
- Custom analysis scripts
- Mathematical libraries
- Protocol analyzers

**Flag Format:** `NCL{algorithm_vulnerability_plaintext}`

## 🛠️ Essential Tools

### Hash Cracking
- Hashcat
- John the Ripper
- Rainbow tables
- Online hash databases

### Steganography
- Steghide
- Binwalk
- Strings
- Audacity
- Custom steganography tools

### Cryptanalysis
- Cryptool
- Custom Python scripts
- Frequency analysis tools
- Mathematical libraries

### Certificate Analysis
- OpenSSL
- Certificate transparency logs
- SSL/TLS analyzers

### Classical Ciphers
- Substitution cipher solvers
- Vigenère cipher tools
- Frequency analysis tools

## 📚 Learning Resources

### Books
- "Applied Cryptography" by Bruce Schneier
- "Cryptography Engineering" by Ferguson, Schneier, and Kohno
- "The Code Book" by Simon Singh

### Online Courses
- Cryptography I by Stanford (Coursera)
- Applied Cryptography by University of Maryland
- Cryptography and Network Security courses

### Websites
- [CryptoHack](https://cryptohack.org/)
- [CryptoPals](https://cryptopals.com/)
- [Crypto101](https://www.crypto101.io/)

## 🔬 Cryptographic Concepts

### Classical Ciphers
- Caesar cipher
- Substitution ciphers
- Vigenère cipher
- Transposition ciphers

### Modern Cryptography
- Symmetric encryption (AES, DES)
- Asymmetric encryption (RSA, ECC)
- Hash functions (MD5, SHA, bcrypt)
- Digital signatures

### Attacks
- Brute force attacks
- Dictionary attacks
- Rainbow table attacks
- Man-in-the-middle attacks
- Chosen plaintext attacks

## ⚠️ Ethical Guidelines

1. **Legal Compliance**: Only work with provided challenge materials
2. **Educational Purpose**: Use skills for learning and ethical hacking
3. **Responsible Disclosure**: Report vulnerabilities responsibly
4. **No Real Systems**: Don't attack real systems without authorization
5. **Documentation**: Keep detailed records of your analysis

## 🏅 Best Practices

1. **Methodical Approach**: Follow systematic analysis procedures
2. **Tool Mastery**: Become proficient with cryptographic tools
3. **Mathematical Foundation**: Understand underlying mathematical concepts
4. **Documentation**: Keep detailed notes of your analysis process
5. **Continuous Learning**: Stay updated with new cryptographic techniques

---

**Remember: Cryptography is both an art and a science - practice makes perfect!**
