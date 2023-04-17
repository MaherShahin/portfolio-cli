function displayContact() {
  return `
      <div>Contact Information:</div>
      <div>Email: amahershahin@gmail.com</div>
    `;
}

function displayCV(args) {
  if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
    return displayHelp();
  }

  const flag = args[0];

  if (flag === "--about" || flag === "-a") {
    return displayAbout();
  } else if (flag === "--experience" || flag === "-e") {
    return displayExperience();
  } else if (flag === "--education" || flag === "-d") {
    return displayEducation();
  } else if (flag === "--skills" || flag === "-s") {
    return displaySkills();
  } else if (flag === "--projects" || flag === "-p") {
    return displayProjects();
  } else if (flag === "--contact" || flag === "-c") {
    return displayContact();
  } else {
    return `<div class="error">Invalid flag: ${flag}</div>`;
  }
}

function displayAbout() {
  return `
    <div>About Me:</div>
    <div>My journey began in the ancient city of Alexandria, founded by Alexander the Great in the year 331 BC,  where I first discovered my passion for creation and invention. With a mind fueled by curiosity and a heart full of wonder, I delved into the mysteries of the mechanical arts, crafting wondrous machines and devices with my own hands. But as I gazed upon the horizon of the digital realm, I knew that my destiny lay in the field of computer science.</div>
    <div>With fervor and dedication, I embarked upon a legendary journey through the realms of technological knowledge, honing my skills as an adept developer and tinkerer. With each passing day, I delved deeper into the mysteries of programming and coding, learning to wield my talents with ever-greater precision and skill. And as I grew in knowledge and wisdom, I came to understand the power of creation and the beauty of invention, and how these forces could be harnessed to transform the world.</div>
    <div>Today, as a seasoned veteran of the digital landscape, I stand ready to tackle any challenge that may come my way. With a keen eye for detail, a mind honed for critical thinking and innovation, and an unwavering commitment to excellence, I strive to create marvels in the digital realm and bring order to chaos. For as long as I live and breathe, I shall continue to push the boundaries of what is possible, and to blaze a trail of innovation and progress for future generations to follow.</div>
    `;
}

function displayExperience() {
  return `
    <div>Professional Experience:</div>
    <div>In my quest for knowledge and mastery, I have served as a valiant Backend Engineer at the technological fortress of Check24 Hotel Essen, where I have crafted intricate systems to power the digital domain. With each passing day, I have delved deeper into the mysteries of programming and coding, mastering the intricacies of PHP, Java, and other arcane technologies.</div>
    <div>During my internship at the fabled Bosch Thermotechnik GmbH, I delved into the mysteries of automation, forging ahead with newfound knowledge and discovering new ways to bring order to the chaos of the digital landscape. Through my work at these venerable institutions, I have honed my intellect and sharpened my skills, preparing myself for the epic battles and challenges that lie ahead.</div>
    <div>With each victory won and each obstacle overcome, I have grown stronger and wiser, ready to tackle any challenge that may come my way. And with the unyielding determination and unwavering commitment to excellence that defines me, I shall continue to push the boundaries of what is possible and to create marvels in the digital realm.</div>
    <div>Throughout my journey, I never lost sight of my passion for learning and exploration. And so, I continued to seek out new opportunities to expand my knowledge and skills, constantly pushing the limits of what I thought was possible. With each challenge, I grew stronger, more resilient, and more creative. </div>
    <div>Now, I stand before you, a master of the ancient arts of computer science and engineering. With my skills and knowledge, I am ready to take on any challenge and bring forth new wonders in the digital realm. So come, journey with me, and let us explore the limitless possibilities of technology together.</div>
    
  `;
}

function displayEducation() {
  return `
  <div>Education:</div>
  <div>My quest for knowledge led me to the hallowed halls of Universität Duisburg-Essen, where I pursued a mastery in the ancient art of making machines roar under the watchful eyes of the Maesters 'Maschinebau'.</div>
  <div>With each passing semester, I grew stronger and wiser, honing my intellect and sharpening my skills for the challenges that lay ahead. And as I emerged from the halls of this venerable institution, I knew that my destiny lay in the field of computer science, and that I was destined for greatness.</div>
  <div>My journey continued with a quest to expand my knowledge and skills in the field of computer science. I embarked on a new chapter of my life, pursuing a second bachelor's degree in computer science to formalize my knowledge and fill any gaps in my understanding. With each course, I delved deeper into the enchanted realm of programming and software development, honing my skills in the ancient arts of algorithms, data structures, and computer architecture.</div>
  <div>As I progressed on my journey, I encountered many challenges and obstacles, but with each trial, I emerged stronger and more resilient. Through my studies, I gained the tools and knowledge to take on even the most daunting of tasks, and my creativity flourished as I explored new concepts and pushed the boundaries of what was possible.</div>
`;
}

function displaySkills() {
  return `
    <div>Skills:</div>
    <div>My skills are not mere tools, but rather extensions of my very being, imbued with the magic of my soul. They are a reflection of my endless quest for knowledge, and the relentless pursuit of excellence that drives me forward. For I am a digital alchemist, a master of the arcane arts, and I stand ready to bend the very fabric of reality to my will.</div>
    <div>Among the powerful spells in my arsenal are:</div>
    <div>HTML and CSS, allowing me to craft exquisite and immersive user interfaces that captivate the senses. With each stroke of my keyboard, I weave intricate webs of code that bring forth astonishing creations.</div>
    <div>JavaScript, a versatile and dynamic language that empowers me to create complex applications and interactive experiences. With each incantation, I conjure spells that bring to life the visions in my mind, transforming the digital landscape into a realm of wonder.</div>
    <div>Java, a robust and reliable language that enables me to build high-performance back-end systems and microservices. With each line of code, I imbue my creations with the power to withstand the most rigorous of challenges and emerge victorious.</div>
    <div>PHP, a server-side language that allows me to create powerful and scalable web applications. With each enchantment, I unleash a torrent of creativity, crafting solutions that exceed even the loftiest of expectations.</div>
    <div>Python, a versatile and powerful language that I use to explore the frontiers of data science and machine learning. With each experiment, I unlock the secrets of the digital realm, discovering hidden patterns and forging new paths forward.</div>
    <div>But my expertise does not end there. I also possess a wealth of knowledge in:</div>
    <div>Frameworks such as React, SpringBoot, Laminas, Symphony, Flask, and Express, allowing me to create complex applications with ease and confidence. With each framework, I unlock new levels of power, enabling me to create solutions that are as robust as they are elegant.</div>
    <div>Databases such as MySQL and MongoDB, allowing me to store, manage, and analyze data with unparalleled efficiency and accuracy. With each query, I uncover new insights, unlocking the secrets of the digital realm and driving progress forward.</div>
    <div>Tools such as Git, Docker, Prometheus, and Grafana, enabling me to manage complex projects and infrastructure with ease. With each tool, I wield the power of the digital realm, mastering its intricacies and unleashing my creativity upon the world.</div>
  `;
}

function displayProjects() {
  return `
    <div>Projects:</div> 
    <div>My projects are not mere creations, but rather extensions of my very soul, imbued with the magic of my being. Each project is a reflection of my endless quest for knowledge, and the relentless pursuit of excellence that drives me forward. For I am a digital alchemist, a master of the arcane arts, and I stand ready to create marvels in the digital realm.</div>
    <div>Join me on an epic journey through the realm of digital creation, and witness firsthand the wonders that lie ahead. Here are some of my recent creations:</div>
    <div>
        <a href="https://github.com/MaherShahin/spotifyYoutubeConverter" target="_blank">Spotify Youtube Converter</a> - A magical portal to bridge the realms of Spotify and YouTube, granting users the power to seamlessly manage and convert playlists between the two platforms. Behold as music transcends boundaries and unleashes its full potential! 
        <br>
        <a href="https://github.com/MaherShahin/myJournalProject" target="_blank">Personal Journal Webapp</a> - A mystical tome, allowing users to capture their innermost thoughts and experiences, preserved for eternity within the digital realm. Let the pages of your life unfold with beauty and grace!
        <br>
        <a href="#" target="_blank" onclick="input.value = 'cv projects'; input.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 13}));">Terminal CV</a> - An interactive command-line portfolio that allows you to explore my skills, experience, and projects in a fun and engaging way. Travel through the depths of my digital realm, and discover the secrets that lie within.
    </div> 
    <div>But my journey does not end here. I am always seeking new challenges and opportunities to push the boundaries of what's possible. Join me on this journey, and together, we can forge a better and brighter future in the digital realm.</div>
    <div>Visit my <a href="https://github.com/MaherShahin" target="_blank">GitHub</a> to check out any new projects that exist purely in the digital realm.</div>
  `;
}



function displayContact() {
  return `
      <div>Contact Information:</div>
      <div>Email: amahershahin@gmail.com</div>
      <div>Phone: +49 176 82340084</div>
      <div>Let us join forces and unleash our digital potential!</div>
    `;
}

function displayHelp() {
  return `
    <div>Available Commands in cv module:</div>
    <div>
      <span class="info">cv [flag]</span> - Embark on a mystical journey through my realm of experience and expertise.
    </div>
    <span class="info">Flags:</span>
    <div>
      <div><span class="success">--help or -h</span> - Call upon a wise sage to provide you with guidance and counsel.</div>
      <div><span class="success">--about or -a</span> - Learn of my origins and delve deep into the very essence of my being.</div>
      <div><span class="success">--experience or -e</span> - Traverse the winding paths of my professional history and gain insight into my past exploits.</div>
      <div><span class="success">--education or -d</span> - Delve into the depths of my academic pursuits and witness firsthand the knowledge I have acquired.</div>
      <div><span class="success">--skills or -s</span> - Unleash the full potential of my technical skills and behold their true power.</div>
      <div><span class="success">--projects or -p</span> - Explore the vast array of my digital creations, each one a monument to my boundless creativity.</div>
      <div><span class="success">--contact or -c</span> - Communicate with me directly and forge a connection that transcends the boundaries of space and time.</div>
    </div>
  `;
}

function displayGeneralHelp() {
  return `
    <div>Welcome to my interactive CLI portfolio!</div>
    
    <div>You can navigate the directory structure using UNIX-like commands:</div>
    <div><span class="success">cd [directory]</span> - Change the current directory</div>
    <div><span class="success">ls</span> - List files and directories in the current directory</div>
    <div><span class="success">pwd</span> - Print the current directory</div>
    <div><span class="success">download [file]</span> - Download a specific file (e.g., CV, cover letter)</div>

    <div>Or delve into a fantastical journey through the realm of my CV:</div>
    <div><span class="success">cv [flag]</span> - Access CV information (type '<span class="success">cv --help</span>' for more details)</div>
    <div><span class="success">clear</span> - Clear the terminal output</div>
  `;
}
ls