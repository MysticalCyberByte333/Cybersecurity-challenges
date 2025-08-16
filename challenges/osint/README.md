# 🔍 Open Source Intelligence (OSINT) Challenges

This directory contains challenges focused on leveraging publicly available information to gather intelligence and insights.

## 🎯 Challenge Overview

OSINT challenges test your ability to:
- Find and analyze publicly available information
- Use search engines and social media effectively
- Extract metadata from files and images
- Conduct domain and DNS reconnaissance
- Perform business intelligence gathering
- Analyze digital footprints

## 🏆 Difficulty Levels

### 🟢 Beginner (100-200 points)
- Basic search engine queries
- Simple social media analysis
- Basic metadata extraction
- Domain WHOIS lookups

### 🟡 Intermediate (300-500 points)
- Advanced search operators
- Multi-platform social media analysis
- Image and file metadata analysis
- Business intelligence gathering
- Email address reconnaissance

### 🔴 Advanced (600-1000 points)
- Deep web research
- Advanced social engineering techniques
- Complex digital footprint analysis
- Custom OSINT tool development
- Threat intelligence gathering

## 📋 Challenge List

### Challenge 1: Social Media Reconnaissance (Beginner - 150 points)
**Description:** Analyze a target's social media presence across multiple platforms.

**Scenario:** You've been given a username "cyber_hunter_2024" and need to gather intelligence about this person's online activities.

**Tasks:**
1. Find all social media accounts associated with this username
2. Identify the person's real name and location
3. Determine their professional background
4. Find any public repositories or code they've shared
5. Identify their interests and hobbies

**Tools Needed:**
- Search engines (Google, Bing, DuckDuckGo)
- Social media platforms (Twitter, LinkedIn, GitHub, Instagram)
- Username search tools

**Flag Format:** `NCL{real_name_location_profession}`

---

### Challenge 2: Domain Intelligence Gathering (Intermediate - 350 points)
**Description:** Conduct comprehensive reconnaissance on a target domain.

**Scenario:** Analyze the domain "securecorp-tech.com" and gather as much intelligence as possible.

**Tasks:**
1. Perform WHOIS lookup and identify registrant information
2. Find all subdomains associated with the domain
3. Identify the hosting provider and IP addresses
4. Find any email addresses associated with the domain
5. Identify technologies and frameworks used
6. Find any public documents or files exposed
7. Check for any security misconfigurations

**Tools Needed:**
- WHOIS tools
- DNS enumeration tools
- Subdomain discovery tools
- Email harvesting tools
- Technology detection tools

**Flag Format:** `NCL{registrant_email_hosting_provider}`

---

### Challenge 3: Image Metadata Analysis (Intermediate - 400 points)
**Description:** Extract and analyze metadata from images to gather intelligence.

**Scenario:** You've found an image file "meeting_notes.jpg" that may contain hidden information.

**Tasks:**
1. Extract all metadata from the image
2. Identify the device used to take the photo
3. Find the GPS coordinates if available
4. Identify any hidden or embedded data
5. Check for steganographic content
6. Analyze the image for any visible sensitive information

**Tools Needed:**
- ExifTool
- Steghide
- Image analysis tools
- GPS coordinate tools

**Flag Format:** `NCL{device_model_gps_coordinates}`

---

### Challenge 4: Business Intelligence Deep Dive (Advanced - 700 points)
**Description:** Conduct comprehensive business intelligence gathering on a target company.

**Scenario:** Gather intelligence on "CyberTech Solutions Inc." including their infrastructure, employees, and potential vulnerabilities.

**Tasks:**
1. Identify all company domains and subdomains
2. Find employee information and email addresses
3. Identify the company's technology stack
4. Find any public repositories or code
5. Identify potential security misconfigurations
6. Find any leaked credentials or sensitive data
7. Analyze the company's digital footprint
8. Identify potential attack vectors

**Tools Needed:**
- Advanced search operators
- Business intelligence tools
- Email harvesting tools
- Technology detection tools
- Breach databases
- Custom OSINT scripts

**Flag Format:** `NCL{ceo_email_tech_stack_vulnerability}`

---

### Challenge 5: Digital Footprint Analysis (Advanced - 800 points)
**Description:** Analyze a target's complete digital footprint across the internet.

**Scenario:** Create a comprehensive profile of "alice.cybersecurity@email.com" including their online activities, relationships, and potential vulnerabilities.

**Tasks:**
1. Find all online accounts associated with the email
2. Identify social media profiles and activities
3. Find any public documents or files
4. Identify professional networks and relationships
5. Find any security-related posts or activities
6. Identify potential personal information exposure
7. Create a timeline of online activities
8. Identify potential security risks

**Tools Needed:**
- Advanced OSINT frameworks
- Social media analysis tools
- Document search tools
- Relationship mapping tools
- Custom automation scripts

**Flag Format:** `NCL{most_active_platform_relationship_count}`

## 🛠️ Essential Tools

### Search Engines
- Google (with advanced operators)
- Bing
- DuckDuckGo
- Shodan (for IoT and infrastructure)

### Social Media Tools
- Twitter Advanced Search
- LinkedIn Sales Navigator
- Instagram Web Scrapers
- Facebook Graph Search

### Domain & DNS Tools
- WHOIS databases
- DNS enumeration tools
- Subdomain discovery tools
- Certificate transparency logs

### Metadata Tools
- ExifTool
- Steghide
- Binwalk
- Strings

### OSINT Frameworks
- Maltego
- Recon-ng
- TheHarvester
- OSINT Framework

## 📚 Learning Resources

### Books
- "Open Source Intelligence Techniques" by Michael Bazzell
- "The OSINT Handbook" by Dale Meredith
- "Hunting Cyber Criminals" by Vinny Troia

### Online Courses
- SANS SEC487: Open-Source Intelligence (OSINT) Gathering and Analysis
- Cybrary OSINT Fundamentals
- OSINT Framework Training

### Websites
- [OSINT Framework](https://osintframework.com/)
- [IntelTechniques](https://inteltechniques.com/)
- [Bellingcat](https://www.bellingcat.com/)

## ⚠️ Ethical Guidelines

1. **Legal Compliance**: Only gather publicly available information
2. **Respect Privacy**: Don't attempt to access private or protected information
3. **Professional Conduct**: Use OSINT skills responsibly and ethically
4. **Documentation**: Keep detailed records of your research process
5. **Consent**: Obtain proper authorization before conducting OSINT on targets

## 🏅 Best Practices

1. **Methodical Approach**: Follow a systematic research methodology
2. **Source Verification**: Always verify information from multiple sources
3. **Documentation**: Keep detailed notes and screenshots
4. **Tool Mastery**: Become proficient with a core set of tools
5. **Continuous Learning**: Stay updated with new OSINT techniques and tools

---

**Remember: OSINT is about finding what's already public, not breaking into private systems!**
