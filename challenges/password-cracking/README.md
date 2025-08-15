# 🔓 Password Cracking Challenges

This directory contains challenges focused on recognizing hash types and employing techniques to retrieve plaintext passwords.

## 🎯 Challenge Overview

Password Cracking challenges test your ability to:
- Identify different hash types and algorithms
- Use various cracking techniques and tools
- Optimize cracking performance
- Analyze password policies and patterns
- Use rainbow tables and wordlists effectively
- Understand password security concepts

## 🏆 Difficulty Levels

### 🟢 Beginner (100-200 points)
- Basic hash identification
- Simple dictionary attacks
- Common hash types
- Basic cracking tools usage

### 🟡 Intermediate (300-500 points)
- Advanced hash identification
- Rainbow table attacks
- Custom wordlist creation
- Performance optimization
- Hash analysis

### 🔴 Advanced (600-1000 points)
- Complex hash cracking
- Custom cracking tools
- Advanced optimization techniques
- Password policy analysis
- Zero-day hash research

## 📋 Challenge List

### Challenge 1: Hash Identification (Beginner - 150 points)
**Description:** Identify different hash types and understand their characteristics.

**Scenario:** You've recovered several password hashes and need to identify their types before cracking.

**Tasks:**
1. Identify the hash type for each of the following:
   - `5f4dcc3b5aa765d61d8327deb882cf99`
   - `$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi`
   - `$6$rounds=5000$salt$hash`
   - `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`
   - `$1$salt$hash`

2. Determine the hashing algorithm used
3. Identify any salts used
4. Assess the security strength of each hash
5. Document your findings

**Tools Needed:**
- Hash identification tools
- Online hash databases
- Hash analysis tools
- Documentation tools

**Flag Format:** `NCL{hash1_type_hash2_type_hash3_type_algorithm}`

---

### Challenge 2: Dictionary Attack (Intermediate - 350 points)
**Description:** Perform dictionary attacks on password hashes using various wordlists.

**Scenario:** You need to crack several password hashes using dictionary attacks.

**Tasks:**
1. Use common wordlists to crack the provided hashes
2. Create custom wordlists based on target information
3. Optimize attack parameters for better performance
4. Analyze password patterns and policies
5. Document successful cracks and patterns
6. Provide recommendations for password security

**Tools Needed:**
- Hashcat
- John the Ripper
- Custom wordlists
- Performance optimization tools

**Flag Format:** `NCL{cracked_password1_cracked_password2_pattern}`

---

### Challenge 3: Rainbow Table Attack (Intermediate - 400 points)
**Description:** Use rainbow tables to crack password hashes efficiently.

**Scenario:** You have access to rainbow tables and need to crack specific hash types.

**Tasks:**
1. Identify suitable rainbow tables for the hash types
2. Use rainbow tables to crack the hashes
3. Compare performance with dictionary attacks
4. Analyze the effectiveness of rainbow tables
5. Document the cracking process
6. Provide recommendations for hash security

**Tools Needed:**
- Rainbow table tools
- Hash cracking tools
- Performance analysis tools
- Documentation tools

**Flag Format:** `NCL{rainbow_table_type_cracked_hash_performance}`

---

### Challenge 4: Brute Force Attack (Advanced - 600 points)
**Description:** Perform brute force attacks on password hashes with optimization.

**Scenario:** You need to crack complex passwords using brute force techniques.

**Tasks:**
1. Set up optimized brute force attacks
2. Use GPU acceleration for better performance
3. Implement custom character sets
4. Analyze attack patterns and progress
5. Optimize attack parameters
6. Document the brute force process
7. Provide security recommendations

**Tools Needed:**
- Hashcat with GPU support
- Custom brute force tools
- Performance monitoring tools
- Optimization scripts

**Flag Format:** `NCL{brute_force_method_cracked_password_performance}`

---

### Challenge 5: Advanced Hash Cracking (Advanced - 700 points)
**Description:** Crack complex and custom hash implementations.

**Scenario:** You've encountered custom hash implementations that require special techniques.

**Tasks:**
1. Analyze custom hash implementations
2. Develop custom cracking tools
3. Implement hash-specific attacks
4. Optimize cracking performance
5. Document the custom approach
6. Provide security analysis
7. Create proof-of-concept tools

**Tools Needed:**
- Custom development tools
- Hash analysis frameworks
- Performance optimization tools
- Documentation tools

**Flag Format:** `NCL{custom_hash_type_cracking_method_security_analysis}`

---

### Challenge 6: Password Policy Analysis (Advanced - 800 points)
**Description:** Analyze password policies and create targeted attacks.

**Scenario:** You need to analyze password policies and create effective cracking strategies.

**Tasks:**
1. Analyze password policy requirements
2. Create targeted wordlists based on policies
3. Implement policy-aware attacks
4. Analyze password complexity patterns
5. Document policy weaknesses
6. Provide policy recommendations
7. Create policy testing tools

**Tools Needed:**
- Policy analysis tools
- Custom wordlist generators
- Pattern analysis tools
- Documentation tools

**Flag Format:** `NCL{policy_weakness_targeted_attack_recommendation}`

---

### Challenge 7: Zero-Day Hash Research (Advanced - 900 points)
**Description:** Research and develop attacks against new hash algorithms.

**Scenario:** You're researching new hash algorithms and developing attack methods.

**Tasks:**
1. Analyze new hash algorithm specifications
2. Identify potential vulnerabilities
3. Develop custom attack tools
4. Test attack effectiveness
5. Document research findings
6. Create proof-of-concept exploits
7. Provide security recommendations

**Tools Needed:**
- Research tools
- Custom development frameworks
- Analysis tools
- Documentation tools

**Flag Format:** `NCL{hash_algorithm_vulnerability_attack_method}`

## 🛠️ Essential Tools

### Hash Cracking
- Hashcat
- John the Ripper
- Rainbow tables
- Custom cracking tools

### Hash Analysis
- Hash identification tools
- Analysis frameworks
- Custom analysis tools
- Documentation tools

### Performance Optimization
- GPU acceleration tools
- Performance monitoring tools
- Optimization scripts
- Benchmarking tools

### Wordlist Management
- Wordlist generators
- Custom wordlist tools
- Policy-aware generators
- Pattern analysis tools

## 📚 Learning Resources

### Books
- "The Art of Password Cracking" by various authors
- "Hash Cracking Techniques" by security professionals
- "Password Security Analysis" by researchers

### Online Courses
- SANS SEC542: Web App Penetration Testing
- Hashcat training courses
- Password security courses

### Websites
- [Hashcat Documentation](https://hashcat.net/hashcat/)
- [John the Ripper](https://www.openwall.com/john/)
- [Password Research Resources](https://crackstation.net/)

## 🔍 Password Cracking Concepts

### Hash Types
- MD5, SHA1, SHA256
- bcrypt, scrypt, PBKDF2
- NTLM, LM hashes
- Custom hash algorithms

### Attack Methods
- Dictionary attacks
- Brute force attacks
- Rainbow table attacks
- Hybrid attacks

### Optimization Techniques
- GPU acceleration
- Distributed cracking
- Custom wordlists
- Pattern analysis

## ⚠️ Ethical Guidelines

1. **Legal Compliance**: Only crack passwords you're authorized to test
2. **Educational Purpose**: Use skills for learning and security testing
3. **Responsible Disclosure**: Report vulnerabilities responsibly
4. **No Real Systems**: Don't attack real systems without authorization
5. **Documentation**: Keep detailed records of your analysis

## 🏅 Best Practices

1. **Methodical Approach**: Follow systematic cracking procedures
2. **Tool Mastery**: Become proficient with cracking tools
3. **Performance Optimization**: Learn to optimize cracking performance
4. **Documentation**: Keep detailed notes of your cracking process
5. **Continuous Learning**: Stay updated with new cracking techniques

## 📊 Sample Cracking Commands

### Hashcat Commands
```bash
# Dictionary attack
hashcat -m 0 -a 0 hash.txt wordlist.txt

# Brute force attack
hashcat -m 0 -a 3 hash.txt ?a?a?a?a?a?a

# Rainbow table attack
hashcat -m 0 -a 0 hash.txt -r rainbow_table.rt

# GPU optimization
hashcat -m 0 -a 0 hash.txt wordlist.txt -w 3
```

### John the Ripper Commands
```bash
# Basic cracking
john hash.txt

# Wordlist mode
john --wordlist=wordlist.txt hash.txt

# Incremental mode
john --incremental hash.txt

# Show cracked passwords
john --show hash.txt
```

---

**Remember: Password cracking is about understanding security - use these skills responsibly!**
