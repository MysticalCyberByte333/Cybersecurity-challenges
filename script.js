// Cybersecurity Challenge App - Main JavaScript

// Global variables
let currentTab = 'overview';
let challenges = {};
let userProgress = JSON.parse(localStorage.getItem('cyberProgress')) || {};
let currentChallenge = null;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadChallenges();
    setupEventListeners();
    updateProgress();
});

// Initialize the application
function initializeApp() {
    console.log('🛡️ Cybersecurity Challenge App Initialized');
    
    // Set default tab
    showTab('overview');
    
    // Initialize progress if empty
    if (Object.keys(userProgress).length === 0) {
        userProgress = {
            completed: [],
            inProgress: [],
            totalPoints: 0,
            categories: {
                osint: { completed: 0, total: 0 },
                cryptography: { completed: 0, total: 0 },
                logAnalysis: { completed: 0, total: 0 },
                networkAnalysis: { completed: 0, total: 0 },
                scanning: { completed: 0, total: 0 },
                forensics: { completed: 0, total: 0 },
                passwordCracking: { completed: 0, total: 0 },
                enumerationExploitation: { completed: 0, total: 0 },
                webSecurity: { completed: 0, total: 0 }
            }
        };
        saveProgress();
    }
}

// Load challenge data
function loadChallenges() {
    challenges = {
        osint: [
            {
                id: 'osint-001',
                title: 'Social Media Reconnaissance',
                description: 'Conduct comprehensive social media reconnaissance on a target organization.',
                difficulty: 'beginner',
                points: 150,
                category: 'osint',
                tools: ['Maltego', 'Recon-ng', 'TheHarvester', 'Social Media APIs'],
                scenario: 'A company has reported suspicious activity and needs you to gather intelligence about potential threats from social media platforms.',
                tasks: [
                    'Identify all social media accounts associated with the target organization',
                    'Extract metadata from profile pictures and posts',
                    'Map employee relationships and connections',
                    'Identify potential security risks from public information'
                ],
                flagFormat: 'flag{organization_name_employees_count}',
                learningObjectives: [
                    'Social media intelligence gathering techniques',
                    'Metadata extraction and analysis',
                    'Relationship mapping and analysis',
                    'Risk assessment from public information'
                ]
            },
            {
                id: 'osint-002',
                title: 'Domain Intelligence Gathering',
                description: 'Perform comprehensive domain reconnaissance and intelligence gathering.',
                difficulty: 'intermediate',
                points: 300,
                category: 'osint',
                tools: ['WHOIS', 'DNS tools', 'Shodan', 'Censys', 'Recon-ng'],
                scenario: 'Investigate a suspicious domain that may be involved in malicious activities.',
                tasks: [
                    'Perform WHOIS lookup and extract registrant information',
                    'Analyze DNS records and identify subdomains',
                    'Search for open ports and services using Shodan',
                    'Identify related domains and infrastructure'
                ],
                flagFormat: 'flag{domain_registrar_creation_year}',
                learningObjectives: [
                    'Domain reconnaissance techniques',
                    'DNS analysis and enumeration',
                    'Infrastructure mapping',
                    'Threat intelligence correlation'
                ]
            }
        ],
        cryptography: [
            {
                id: 'crypto-001',
                title: 'Classical Cipher Analysis',
                description: 'Analyze and break classical encryption methods.',
                difficulty: 'beginner',
                points: 200,
                category: 'cryptography',
                tools: ['Cryptool', 'Python', 'Frequency analysis tools'],
                scenario: 'You have intercepted an encrypted message using a classical cipher.',
                tasks: [
                    'Identify the type of cipher used',
                    'Perform frequency analysis',
                    'Apply appropriate cryptanalysis techniques',
                    'Decrypt the message and extract the flag'
                ],
                flagFormat: 'flag{cipher_type_decrypted_text}',
                learningObjectives: [
                    'Classical cipher identification',
                    'Frequency analysis techniques',
                    'Cryptanalysis methods',
                    'Historical encryption weaknesses'
                ]
            },
            {
                id: 'crypto-002',
                title: 'Hash Identification and Cracking',
                description: 'Identify hash types and crack passwords using various techniques.',
                difficulty: 'intermediate',
                points: 400,
                category: 'cryptography',
                tools: ['Hashcat', 'John the Ripper', 'Hash identifier tools'],
                scenario: 'You have recovered several password hashes from a compromised system.',
                tasks: [
                    'Identify the hash algorithm used',
                    'Create custom wordlists based on context',
                    'Apply appropriate cracking techniques',
                    'Analyze password patterns and policies'
                ],
                flagFormat: 'flag{hash_type_strongest_password}',
                learningObjectives: [
                    'Hash algorithm identification',
                    'Password cracking techniques',
                    'Wordlist generation and optimization',
                    'Password policy analysis'
                ]
            }
        ],
        logAnalysis: [
            {
                id: 'logs-001',
                title: 'Web Server Log Analysis',
                description: 'Analyze web server logs to identify suspicious activity.',
                difficulty: 'beginner',
                points: 250,
                category: 'logAnalysis',
                tools: ['ELK Stack', 'Splunk', 'Python', 'Regular expressions'],
                scenario: 'A web server has been experiencing unusual traffic patterns.',
                tasks: [
                    'Parse and filter log entries',
                    'Identify anomalous request patterns',
                    'Correlate events across time',
                    'Generate incident report'
                ],
                flagFormat: 'flag{attack_type_timestamp}',
                learningObjectives: [
                    'Log parsing and analysis',
                    'Anomaly detection',
                    'Event correlation',
                    'Incident reporting'
                ]
            }
        ],
        networkAnalysis: [
            {
                id: 'network-001',
                title: 'Basic Packet Analysis',
                description: 'Analyze network packets to identify malicious traffic.',
                difficulty: 'beginner',
                points: 200,
                category: 'networkAnalysis',
                tools: ['Wireshark', 'tcpdump', 'NetworkMiner'],
                scenario: 'Network traffic analysis reveals suspicious packets.',
                tasks: [
                    'Capture and filter packets',
                    'Analyze protocol behavior',
                    'Identify malicious patterns',
                    'Extract hidden data'
                ],
                flagFormat: 'flag{protocol_malicious_ip}',
                learningObjectives: [
                    'Packet capture and analysis',
                    'Protocol understanding',
                    'Traffic pattern recognition',
                    'Data extraction techniques'
                ]
            }
        ],
        scanning: [
            {
                id: 'scan-001',
                title: 'Basic Port Scanning',
                description: 'Perform comprehensive port scanning and service enumeration.',
                difficulty: 'beginner',
                points: 150,
                category: 'scanning',
                tools: ['Nmap', 'Masscan', 'Netcat'],
                scenario: 'Perform reconnaissance on a target network.',
                tasks: [
                    'Conduct port scanning',
                    'Identify open services',
                    'Analyze service versions',
                    'Document findings'
                ],
                flagFormat: 'flag{open_ports_count_services}',
                learningObjectives: [
                    'Port scanning techniques',
                    'Service enumeration',
                    'Version detection',
                    'Reconnaissance methodology'
                ]
            }
        ],
        forensics: [
            {
                id: 'forensics-001',
                title: 'Basic File System Analysis',
                description: 'Analyze file systems for digital evidence.',
                difficulty: 'beginner',
                points: 300,
                category: 'forensics',
                tools: ['Autopsy', 'FTK Imager', 'Sleuth Kit'],
                scenario: 'Analyze a disk image for evidence of malicious activity.',
                tasks: [
                    'Mount and analyze disk image',
                    'Identify deleted files',
                    'Extract file metadata',
                    'Timeline analysis'
                ],
                flagFormat: 'flag{deleted_file_name_timestamp}',
                learningObjectives: [
                    'File system analysis',
                    'Deleted file recovery',
                    'Metadata analysis',
                    'Timeline reconstruction'
                ]
            }
        ],
        passwordCracking: [
            {
                id: 'pass-001',
                title: 'Hash Identification',
                description: 'Identify and crack various password hashes.',
                difficulty: 'beginner',
                points: 200,
                category: 'passwordCracking',
                tools: ['Hashcat', 'John the Ripper', 'Hash identifier'],
                scenario: 'Crack passwords from a compromised system.',
                tasks: [
                    'Identify hash algorithms',
                    'Select appropriate cracking methods',
                    'Optimize cracking parameters',
                    'Analyze results'
                ],
                flagFormat: 'flag{hash_type_cracked_password}',
                learningObjectives: [
                    'Hash identification',
                    'Cracking techniques',
                    'Tool optimization',
                    'Password analysis'
                ]
            }
        ],
        enumerationExploitation: [
            {
                id: 'exploit-001',
                title: 'Basic Buffer Overflow',
                description: 'Exploit a basic buffer overflow vulnerability.',
                difficulty: 'intermediate',
                points: 500,
                category: 'enumerationExploitation',
                tools: ['GDB', 'Python', 'Metasploit'],
                scenario: 'Exploit a vulnerable application with buffer overflow.',
                tasks: [
                    'Analyze vulnerable code',
                    'Develop exploit payload',
                    'Execute buffer overflow',
                    'Gain shell access'
                ],
                flagFormat: 'flag{exploit_type_shell_access}',
                learningObjectives: [
                    'Buffer overflow understanding',
                    'Exploit development',
                    'Debugging techniques',
                    'Shell code development'
                ]
            }
        ],
        webSecurity: [
            {
                id: 'web-001',
                title: 'SQL Injection',
                description: 'Identify and exploit SQL injection vulnerabilities.',
                difficulty: 'intermediate',
                points: 400,
                category: 'webSecurity',
                tools: ['Burp Suite', 'SQLMap', 'OWASP ZAP'],
                scenario: 'Test a web application for SQL injection vulnerabilities.',
                tasks: [
                    'Identify injection points',
                    'Test different injection techniques',
                    'Extract database information',
                    'Bypass security measures'
                ],
                flagFormat: 'flag{injection_type_database_name}',
                learningObjectives: [
                    'SQL injection techniques',
                    'Web application testing',
                    'Database enumeration',
                    'Security bypass methods'
                ]
            }
        ]
    };
    
    updateChallengeCounts();
}

// Setup event listeners
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });
    
    // Challenge card clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.challenge-card')) {
            const card = e.target.closest('.challenge-card');
            const challengeId = card.getAttribute('data-challenge-id');
            openChallengeModal(challengeId);
        }
    });
    
    // Modal close
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterChallenges(this.value);
        });
    }
    
    // Difficulty filter
    document.querySelectorAll('.difficulty-filter').forEach(filter => {
        filter.addEventListener('click', function() {
            const difficulty = this.getAttribute('data-difficulty');
            filterByDifficulty(difficulty);
        });
    });
    
    // Category filter
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
    
    // Progress tracking
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('start-challenge')) {
            startChallenge(currentChallenge.id);
        }
        if (e.target.classList.contains('complete-challenge')) {
            completeChallenge(currentChallenge.id);
        }
    });
}

// Show specific tab
function showTab(tabName) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabName);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    
    // Add active class to selected tab
    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    currentTab = tabName;
    
    // Load specific content based on tab
    switch(tabName) {
        case 'challenges':
            loadChallengesTab();
            break;
        case 'progress':
            loadProgressTab();
            break;
        case 'tools':
            loadToolsTab();
            break;
        case 'resources':
            loadResourcesTab();
            break;
    }
}

// Load challenges tab content
function loadChallengesTab() {
    const container = document.getElementById('challenges');
    if (!container) return;
    
    let html = `
        <div class="challenges-header">
            <div class="search-section">
                <input type="text" id="searchInput" placeholder="Search challenges..." class="search-input">
                <div class="filter-buttons">
                    <button class="filter-btn active" data-difficulty="all">All</button>
                    <button class="filter-btn difficulty-filter" data-difficulty="beginner">Beginner</button>
                    <button class="filter-btn difficulty-filter" data-difficulty="intermediate">Intermediate</button>
                    <button class="filter-btn difficulty-filter" data-difficulty="advanced">Advanced</button>
                </div>
            </div>
        </div>
        <div class="challenges-grid" id="challenges-grid">
    `;
    
    // Group challenges by category
    const categories = {
        osint: { name: 'Open Source Intelligence', icon: '🔍' },
        cryptography: { name: 'Cryptography', icon: '🔐' },
        logAnalysis: { name: 'Log Analysis', icon: '📊' },
        networkAnalysis: { name: 'Network Analysis', icon: '🌐' },
        scanning: { name: 'Scanning', icon: '🔍' },
        forensics: { name: 'Forensics', icon: '🔬' },
        passwordCracking: { name: 'Password Cracking', icon: '🔓' },
        enumerationExploitation: { name: 'Enumeration & Exploitation', icon: '⚔️' },
        webSecurity: { name: 'Web Security', icon: '🌍' }
    };
    
    Object.keys(categories).forEach(category => {
        const categoryChallenges = challenges[category] || [];
        if (categoryChallenges.length > 0) {
            html += `
                <div class="category-section">
                    <h3 class="category-title">${categories[category].icon} ${categories[category].name}</h3>
                    <div class="category-challenges">
            `;
            
            categoryChallenges.forEach(challenge => {
                const isCompleted = userProgress.completed.includes(challenge.id);
                const isInProgress = userProgress.inProgress.includes(challenge.id);
                const statusClass = isCompleted ? 'completed' : isInProgress ? 'in-progress' : '';
                
                html += `
                    <div class="challenge-card ${statusClass}" data-challenge-id="${challenge.id}">
                        <div class="challenge-header">
                            <h4 class="challenge-title">${challenge.title}</h4>
                            <span class="challenge-points">${challenge.points} pts</span>
                        </div>
                        <p class="challenge-description">${challenge.description}</p>
                        <div class="challenge-meta">
                            <span class="difficulty-badge ${challenge.difficulty}">${challenge.difficulty}</span>
                            <span class="tools-count">${challenge.tools.length} tools</span>
                        </div>
                        ${isCompleted ? '<div class="completion-badge">✓ Completed</div>' : ''}
                        ${isInProgress ? '<div class="progress-badge">🔄 In Progress</div>' : ''}
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Load progress tab content
function loadProgressTab() {
    const container = document.getElementById('progress');
    if (!container) return;
    
    const totalChallenges = Object.values(challenges).flat().length;
    const completedCount = userProgress.completed.length;
    const inProgressCount = userProgress.inProgress.length;
    const completionRate = totalChallenges > 0 ? Math.round((completedCount / totalChallenges) * 100) : 0;
    
    let html = `
        <div class="progress-overview">
            <div class="progress-stats">
                <div class="stat-card">
                    <h3>${completedCount}</h3>
                    <p>Completed</p>
                </div>
                <div class="stat-card">
                    <h3>${inProgressCount}</h3>
                    <p>In Progress</p>
                </div>
                <div class="stat-card">
                    <h3>${userProgress.totalPoints}</h3>
                    <p>Total Points</p>
                </div>
                <div class="stat-card">
                    <h3>${completionRate}%</h3>
                    <p>Completion Rate</p>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${completionRate}%"></div>
            </div>
        </div>
        
        <div class="category-progress">
            <h3>Progress by Category</h3>
            <div class="category-grid">
    `;
    
    const categories = {
        osint: 'Open Source Intelligence',
        cryptography: 'Cryptography',
        logAnalysis: 'Log Analysis',
        networkAnalysis: 'Network Analysis',
        scanning: 'Scanning',
        forensics: 'Forensics',
        passwordCracking: 'Password Cracking',
        enumerationExploitation: 'Enumeration & Exploitation',
        webSecurity: 'Web Security'
    };
    
    Object.keys(categories).forEach(category => {
        const categoryProgress = userProgress.categories[category];
        const total = categoryProgress.total;
        const completed = categoryProgress.completed;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        html += `
            <div class="category-progress-card">
                <h4>${categories[category]}</h4>
                <div class="category-progress-bar">
                    <div class="category-progress-fill" style="width: ${rate}%"></div>
                </div>
                <p>${completed}/${total} challenges</p>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
        
        <div class="recent-activity">
            <h3>Recent Activity</h3>
            <div class="activity-list">
    `;
    
    // Show recent completed challenges
    const recentCompleted = userProgress.completed.slice(-5).reverse();
    recentCompleted.forEach(challengeId => {
        const challenge = findChallengeById(challengeId);
        if (challenge) {
            html += `
                <div class="activity-item completed">
                    <span class="activity-icon">✓</span>
                    <div class="activity-content">
                        <h4>${challenge.title}</h4>
                        <p>Completed - ${challenge.points} points earned</p>
                    </div>
                </div>
            `;
        }
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Load tools tab content
function loadToolsTab() {
    const container = document.getElementById('tools');
    if (!container) return;
    
    const tools = {
        reconnaissance: {
            name: 'Reconnaissance Tools',
            tools: [
                { name: 'Nmap', description: 'Network discovery and security auditing', url: 'https://nmap.org/' },
                { name: 'Recon-ng', description: 'Full-featured reconnaissance framework', url: 'https://github.com/lanmaster53/recon-ng' },
                { name: 'TheHarvester', description: 'Email, subdomain, and name harvesting', url: 'https://github.com/laramies/theHarvester' },
                { name: 'Maltego', description: 'Interactive data mining tool', url: 'https://www.maltego.com/' }
            ]
        },
        analysis: {
            name: 'Analysis Tools',
            tools: [
                { name: 'Wireshark', description: 'Network protocol analyzer', url: 'https://www.wireshark.org/' },
                { name: 'Volatility', description: 'Memory forensics framework', url: 'https://www.volatilityfoundation.org/' },
                { name: 'Autopsy', description: 'Digital forensics platform', url: 'https://www.autopsy.com/' },
                { name: 'Splunk', description: 'Log analysis and monitoring', url: 'https://www.splunk.com/' }
            ]
        },
        exploitation: {
            name: 'Exploitation Tools',
            tools: [
                { name: 'Metasploit', description: 'Penetration testing framework', url: 'https://www.metasploit.com/' },
                { name: 'Burp Suite', description: 'Web application security testing', url: 'https://portswigger.net/burp' },
                { name: 'Hashcat', description: 'Advanced password recovery', url: 'https://hashcat.net/' },
                { name: 'John the Ripper', description: 'Password cracking tool', url: 'https://www.openwall.com/john/' }
            ]
        }
    };
    
    let html = '<div class="tools-grid">';
    
    Object.keys(tools).forEach(category => {
        const categoryTools = tools[category];
        html += `
            <div class="tool-category">
                <h3>${categoryTools.name}</h3>
                <div class="tool-list">
        `;
        
        categoryTools.tools.forEach(tool => {
            html += `
                <div class="tool-item">
                    <h4>${tool.name}</h4>
                    <p>${tool.description}</p>
                    <a href="${tool.url}" target="_blank" class="tool-link">Learn More</a>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Load resources tab content
function loadResourcesTab() {
    const container = document.getElementById('resources-container');
    if (!container) return;
    
    const resources = {
        learning: {
            name: 'Learning Resources',
            items: [
                { name: 'Cybrary', description: 'Free cybersecurity courses', url: 'https://www.cybrary.it/' },
                { name: 'SANS', description: 'Professional security training', url: 'https://www.sans.org/' },
                { name: 'OWASP', description: 'Web application security', url: 'https://owasp.org/' },
                { name: 'HackTheBox', description: 'Online penetration testing labs', url: 'https://www.hackthebox.com/' }
            ]
        },
        practice: {
            name: 'Practice Platforms',
            items: [
                { name: 'TryHackMe', description: 'Interactive cybersecurity learning', url: 'https://tryhackme.com/' },
                { name: 'VulnHub', description: 'Vulnerable machines for practice', url: 'https://www.vulnhub.com/' },
                { name: 'OverTheWire', description: 'War games and challenges', url: 'https://overthewire.org/' },
                { name: 'CTFtime', description: 'Capture The Flag competitions', url: 'https://ctftime.org/' }
            ]
        },
        documentation: {
            name: 'Documentation',
            items: [
                { name: 'NIST Cybersecurity Framework', description: 'Cybersecurity standards', url: 'https://www.nist.gov/cyberframework' },
                { name: 'MITRE ATT&CK', description: 'Adversary tactics and techniques', url: 'https://attack.mitre.org/' },
                { name: 'CVE Database', description: 'Common vulnerabilities and exposures', url: 'https://cve.mitre.org/' },
                { name: 'Security Focus', description: 'Security vulnerability database', url: 'https://www.securityfocus.com/' }
            ]
        }
    };
    
    let html = '<div class="resources-grid">';
    
    Object.keys(resources).forEach(category => {
        const categoryResources = resources[category];
        html += `
            <div class="resource-category">
                <h3>${categoryResources.name}</h3>
                <div class="resource-list">
        `;
        
        categoryResources.items.forEach(resource => {
            html += `
                <div class="resource-item">
                    <h4>${resource.name}</h4>
                    <p>${resource.description}</p>
                    <a href="${resource.url}" target="_blank" class="resource-link">Visit Resource</a>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Open challenge modal
function openChallengeModal(challengeId) {
    const challenge = findChallengeById(challengeId);
    if (!challenge) return;
    
    currentChallenge = challenge;
    
    const modal = document.getElementById('challengeModal');
    const modalContent = document.getElementById('modal-content');
    
    const isCompleted = userProgress.completed.includes(challengeId);
    const isInProgress = userProgress.inProgress.includes(challengeId);
    
    let html = `
        <div class="modal-header">
            <h2>${challenge.title}</h2>
            <span class="challenge-points">${challenge.points} points</span>
        </div>
        
        <div class="modal-body">
            <div class="challenge-info">
                <div class="info-row">
                    <span class="label">Difficulty:</span>
                    <span class="difficulty-badge ${challenge.difficulty}">${challenge.difficulty}</span>
                </div>
                <div class="info-row">
                    <span class="label">Category:</span>
                    <span>${getCategoryName(challenge.category)}</span>
                </div>
            </div>
            
            <div class="challenge-section">
                <h3>Description</h3>
                <p>${challenge.description}</p>
            </div>
            
            <div class="challenge-section">
                <h3>Scenario</h3>
                <p>${challenge.scenario}</p>
            </div>
            
            <div class="challenge-section">
                <h3>Tasks</h3>
                <ol>
                    ${challenge.tasks.map(task => `<li>${task}</li>`).join('')}
                </ol>
            </div>
            
            <div class="challenge-section">
                <h3>Tools Needed</h3>
                <div class="tools-list">
                    ${challenge.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
            </div>
            
            <div class="challenge-section">
                <h3>Learning Objectives</h3>
                <ul>
                    ${challenge.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
            
            <div class="challenge-section">
                <h3>Flag Format</h3>
                <code class="flag-format">${challenge.flagFormat}</code>
            </div>
        </div>
        
        <div class="modal-footer">
            ${isCompleted ? 
                '<button class="btn btn-success" disabled>✓ Completed</button>' :
                isInProgress ?
                '<button class="btn btn-primary complete-challenge">Complete Challenge</button>' :
                '<button class="btn btn-primary start-challenge">Start Challenge</button>'
            }
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;
    
    modalContent.innerHTML = html;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('challengeModal');
    modal.style.display = 'none';
    currentChallenge = null;
}

// Start challenge
function startChallenge(challengeId) {
    if (!userProgress.inProgress.includes(challengeId)) {
        userProgress.inProgress.push(challengeId);
        saveProgress();
        updateProgress();
        closeModal();
        showNotification('Challenge started! Good luck!', 'success');
    }
}

// Complete challenge
function completeChallenge(challengeId) {
    const challenge = findChallengeById(challengeId);
    if (!challenge) return;
    
    // Remove from in progress
    const inProgressIndex = userProgress.inProgress.indexOf(challengeId);
    if (inProgressIndex > -1) {
        userProgress.inProgress.splice(inProgressIndex, 1);
    }
    
    // Add to completed
    if (!userProgress.completed.includes(challengeId)) {
        userProgress.completed.push(challengeId);
        userProgress.totalPoints += challenge.points;
        
        // Update category progress
        if (userProgress.categories[challenge.category]) {
            userProgress.categories[challenge.category].completed++;
        }
        
        saveProgress();
        updateProgress();
        closeModal();
        showNotification(`Challenge completed! +${challenge.points} points earned!`, 'success');
    }
}

// Find challenge by ID
function findChallengeById(challengeId) {
    for (const category in challenges) {
        const challenge = challenges[category].find(c => c.id === challengeId);
        if (challenge) return challenge;
    }
    return null;
}

// Get category name
function getCategoryName(category) {
    const names = {
        osint: 'Open Source Intelligence',
        cryptography: 'Cryptography',
        logAnalysis: 'Log Analysis',
        networkAnalysis: 'Network Analysis',
        scanning: 'Scanning',
        forensics: 'Forensics',
        passwordCracking: 'Password Cracking',
        enumerationExploitation: 'Enumeration & Exploitation',
        webSecurity: 'Web Security'
    };
    return names[category] || category;
}

// Update challenge counts
function updateChallengeCounts() {
    Object.keys(challenges).forEach(category => {
        if (userProgress.categories[category]) {
            userProgress.categories[category].total = challenges[category].length;
        }
    });
    saveProgress();
}

// Update progress display
function updateProgress() {
    // Update header stats
    const totalChallenges = Object.values(challenges).flat().length;
    const completedCount = userProgress.completed.length;
    const totalPoints = userProgress.totalPoints;
    
    const statsElements = document.querySelectorAll('.stat-number');
    statsElements.forEach(element => {
        const statType = element.getAttribute('data-stat');
        switch(statType) {
            case 'challenges':
                element.textContent = totalChallenges;
                break;
            case 'completed':
                element.textContent = completedCount;
                break;
            case 'points':
                element.textContent = totalPoints;
                break;
        }
    });
    
    // Update progress bar
    const completionRate = totalChallenges > 0 ? Math.round((completedCount / totalChallenges) * 100) : 0;
    const progressBar = document.querySelector('.overview-progress-bar .progress-fill');
    if (progressBar) {
        progressBar.style.width = `${completionRate}%`;
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('cyberProgress', JSON.stringify(userProgress));
}

// Filter challenges
function filterChallenges(searchTerm) {
    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
        const title = card.querySelector('.challenge-title').textContent.toLowerCase();
        const description = card.querySelector('.challenge-description').textContent.toLowerCase();
        const matches = title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
        card.style.display = matches ? 'block' : 'none';
    });
}

// Filter by difficulty
function filterByDifficulty(difficulty) {
    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
        const cardDifficulty = card.querySelector('.difficulty-badge').textContent;
        const matches = difficulty === 'all' || cardDifficulty === difficulty;
        card.style.display = matches ? 'block' : 'none';
    });
    
    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Filter by category
function filterByCategory(category) {
    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
        const cardCategory = card.closest('.category-section').querySelector('.category-title').textContent;
        const matches = category === 'all' || cardCategory.includes(category);
        card.closest('.category-section').style.display = matches ? 'block' : 'none';
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Export progress
function exportProgress() {
    const dataStr = JSON.stringify(userProgress, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cybersecurity-progress.json';
    link.click();
    
    URL.revokeObjectURL(url);
}

// Import progress
function importProgress(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedProgress = JSON.parse(e.target.result);
            userProgress = importedProgress;
            saveProgress();
            updateProgress();
            showNotification('Progress imported successfully!', 'success');
        } catch (error) {
            showNotification('Invalid progress file!', 'error');
        }
    };
    reader.readAsText(file);
}

// Reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userProgress = {
            completed: [],
            inProgress: [],
            totalPoints: 0,
            categories: {
                osint: { completed: 0, total: 0 },
                cryptography: { completed: 0, total: 0 },
                logAnalysis: { completed: 0, total: 0 },
                networkAnalysis: { completed: 0, total: 0 },
                scanning: { completed: 0, total: 0 },
                forensics: { completed: 0, total: 0 },
                passwordCracking: { completed: 0, total: 0 },
                enumerationExploitation: { completed: 0, total: 0 },
                webSecurity: { completed: 0, total: 0 }
            }
        };
        saveProgress();
        updateProgress();
        updateChallengeCounts();
        showNotification('Progress reset successfully!', 'success');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Auto-save progress every 30 seconds
setInterval(saveProgress, 30000);

console.log('🚀 Cybersecurity Challenge App JavaScript loaded successfully!');
