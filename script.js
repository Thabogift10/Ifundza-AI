/**
 * iFundza AI - Monochrome & Minimalist 3D Engine & Simulator Logic
 */

// --- 1. SAMPLE TRANSLATION DATA (No Emojis) ---
const sampleQuestions = {
  maths: {
    title: "Mathematics (Grade 11 - Algebra)",
    english: 'Solve for x if <span class="math-formula">2x² + 5x - 3 = 0</span>. Show all working steps. <span class="marks-tag">[4 marks]</span>',
    translations: {
      isizulu: 'Xazulula u-x uma <span class="math-formula">2x² + 5x - 3 = 0</span>. Veza zonke izinyathelo zokubala. <span class="marks-tag">[Amamaki angu-4]</span>',
      isixhosa: 'Sombulula u-x ukuba <span class="math-formula">2x² + 5x - 3 = 0</span>. Bonisa onke amanyathelo okubala. <span class="marks-tag">[Amanqaku ama-4]</span>',
      sepedi: 'Rarolla x ge eba <span class="math-formula">2x² + 5x - 3 = 0</span>. Laetša dikgato ka moka tša go šoma. <span class="marks-tag">[Meputso e 4]</span>',
      setswana: 'Rarabolola x fa e le gore <span class="math-formula">2x² + 5x - 3 = 0</span>. Bontsha dikgato tsotlhe tsa go dira. <span class="marks-tag">[Maduo a le 4]</span>',
      sesotho: 'Rarolla x haeba <span class="math-formula">2x² + 5x - 3 = 0</span>. Bontsha mehato yohle ya ho sebetsa. <span class="marks-tag">[Matshwao a 4]</span>',
      afrikaans: 'Los op vir x indien <span class="math-formula">2x² + 5x - 3 = 0</span>. Toon alle bewerkings. <span class="marks-tag">[4 punte]</span>',
      xitsonga: 'Lulamisa x loko <span class="math-formula">2x² + 5x - 3 = 0</span>. Komba magoza hinkwawo yo tirha. <span class="marks-tag">[Timaraka ta 4]</span>'
    },
    explanations: {
      isizulu: '<strong>Incazelo nge-isiZulu:</strong> Leli i-quadratic equation. Ungasebenzisa i-factorisation noma ifomula ethi <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> lapho u-a=2, b=5, no-c=-3. Lokhu kukunika: (2x - 1)(x + 3) = 0, ngakho x = 0.5 noma x = -3.',
      isixhosa: '<strong>Inkcazo nge-isiXhosa:</strong> Le yi-quadratic equation. Ungasebenzisa ifomula ethi <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> apho a=2, b=5, no-c=-3. Ngoko ke: (2x - 1)(x + 3) = 0, apho x = 0.5 okanye x = -3.',
      sepedi: '<strong>Tlhaloso ka Sepedi:</strong> Ye ke quadratic equation. O ka šomiša fomula ya <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> fao a=2, b=5, le c=-3. O hwetša (2x - 1)(x + 3) = 0, ka gona x = 0.5 goba x = -3.',
      setswana: '<strong>Tlhaloso ka Setswana:</strong> E ke quadratic equation. Dirisa fomula ya <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> fa a=2, b=5, le c=-3. O bona (2x - 1)(x + 3) = 0, ka jalo x = 0.5 kgotsa x = -3.',
      sesotho: '<strong>Tlhaloso ka Sesotho:</strong> E ke quadratic equation. Sebedisa fomula ya <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> moo a=2, b=5, le c=-3. Kahoo x = 0.5 kapa x = -3.',
      afrikaans: '<strong>Verduideliking in Afrikaans:</strong> Hierdie is \'n kwadratiese vergelyking. Gebruik die formule <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> waar a=2, b=5, en c=-3. Dit gee: (2x - 1)(x + 3) = 0, dus is x = 0.5 of x = -3.',
      xitsonga: '<strong>Nhlamuselo hi Xitsonga:</strong> Leyi i quadratic equation. Tirhisa formula ya <span class="math-formula">x = (-b ± √(b² - 4ac)) / (2a)</span> laha a=2, b=5, na c=-3. Hikwalaho x = 0.5 kumbe x = -3.'
    }
  },
  physics: {
    title: "Physical Sciences (Grade 12 - Mechanics)",
    english: 'A crate of mass <span class="math-formula">m = 25 kg</span> is pulled along a rough horizontal surface with a force of <span class="math-formula">F = 120 N</span>. Calculate the acceleration if <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[5 marks]</span>',
    translations: {
      isizulu: 'Ibhokisi elinesisisindo esingu-<span class="math-formula">m = 25 kg</span> lidonswa endaweni eqondile erhabaxa ngomfutho ongu-<span class="math-formula">F = 120 N</span>. Bala ukushesha (acceleration) uma <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Amamaki angu-5]</span>',
      isixhosa: 'Ibhokisi enobunzima obungu-<span class="math-formula">m = 25 kg</span> itsalwa kumgangatho omalunga ongenabubanzi obuthambileyo ngomkhosi ongu-<span class="math-formula">F = 120 N</span>. Bala i-acceleration ukuba <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Amanqaku ama-5]</span>',
      sepedi: 'Lepokisi la boima bja <span class="math-formula">m = 25 kg</span> le gogwa godimo ga bokagodimo bja go magwata ka maatla a <span class="math-formula">F = 120 N</span>. Balela lebelo (acceleration) ge eba <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Meputso e 5]</span>',
      setswana: 'Lebokoso la bokete jwa <span class="math-formula">m = 25 kg</span> le gogwa mo boalong jo bo magwata ka maatla a <span class="math-formula">F = 120 N</span>. Balela acceleration fa <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Maduo a le 5]</span>',
      sesotho: 'Lebokose le boima ba <span class="math-formula">m = 25 kg</span> le hulwa hodima sebaka se mahwashe ka matla a <span class="math-formula">F = 120 N</span>. Bala acceleration haeba <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Matshwao a 5]</span>',
      afrikaans: '\'n Krat met massa <span class="math-formula">m = 25 kg</span> word oor \'n rowwe horisontale oppervlak getrek met \'n krag van <span class="math-formula">F = 120 N</span>. Bereken die versnelling as <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[5 punte]</span>',
      xitsonga: 'Bokisi ra ntiko wa <span class="math-formula">m = 25 kg</span> ri kokiwa eka ribuwa ro ka ri nga lulamangiki hi matimba ya <span class="math-formula">F = 120 N</span>. Hlayela acceleration loko <span class="math-formula">μ_k = 0.25</span>. <span class="marks-tag">[Timaraka ta 5]</span>'
    },
    explanations: {
      isizulu: '<strong>Incazelo nge-isiZulu:</strong> Sebenzisa umthetho ka-Newton wesibili: <span class="math-formula">F_net = m · a</span>. Bala i-friction kuqala: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Khona-ke <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Ngakho: <span class="math-formula">a = 58.75 / 25 = 2.35 m/s²</span>.',
      isixhosa: '<strong>Inkcazo nge-isiXhosa:</strong> Sebenzisa umthetho wesibini ka-Newton: <span class="math-formula">F_net = m · a</span>. Bala i-friction kuqala: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Emva koko <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Ngoko ke: <span class="math-formula">a = 2.35 m/s²</span>.',
      sepedi: '<strong>Tlhaloso ka Sepedi:</strong> Šomiša molao wa bobedi wa Newton: <span class="math-formula">F_net = m · a</span>. Bala friction: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Ke moka <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Ka gona: <span class="math-formula">a = 2.35 m/s²</span>.',
      setswana: '<strong>Tlhaloso ka Setswana:</strong> Dirisa molao wa bobedi wa Newton: <span class="math-formula">F_net = m · a</span>. Balela friction: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Go tswa foo <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Ka jalo: <span class="math-formula">a = 2.35 m/s²</span>.',
      sesotho: '<strong>Tlhaloso ka Sesotho:</strong> Sebedisa molao wa bobedi wa Newton: <span class="math-formula">F_net = m · a</span>. Bala friction pele: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Ebe <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Kahoo: <span class="math-formula">a = 2.35 m/s²</span>.',
      afrikaans: '<strong>Verduideliking in Afrikaans:</strong> Gebruik Newton se tweede wet: <span class="math-formula">F_net = m · a</span>. Bereken wrywing: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Dan is <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Dus: <span class="math-formula">a = 2.35 m/s²</span>.',
      xitsonga: '<strong>Nhlamuselo hi Xitsonga:</strong> Tirhisa nawu wa vumbirhi wa Newton: <span class="math-formula">F_net = m · a</span>. Hlayela friction: <span class="math-formula">f_k = μ_k · N = 0.25 · (25 · 9.8) = 61.25 N</span>. Kutani <span class="math-formula">F_net = 120 - 61.25 = 58.75 N</span>. Hikwalaho: <span class="math-formula">a = 2.35 m/s²</span>.'
    }
  },
  chemistry: {
    title: "Physical Sciences (Grade 11 - Chemical Change)",
    english: 'Consider the reaction: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Calculate the volume of <span class="math-formula">O₂</span> gas required at STP to produce <span class="math-formula">36 g</span> of water. <span class="marks-tag">[4 marks]</span>',
    translations: {
      isizulu: 'Bheka ukuhlangana kwamakhemikhali: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Bala umthamo wegesi ye-<span class="math-formula">O₂</span> edingekayo e-STP ukuveza u-<span class="math-formula">36 g</span> wamanzi. <span class="marks-tag">[Amamaki angu-4]</span>',
      isixhosa: 'Qwalasela le reaction: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Bala umthamo werhasi ye-<span class="math-formula">O₂</span> efunekayo kwi-STP ukuvelisa u-<span class="math-formula">36 g</span> wamanzi. <span class="marks-tag">[Amanqaku ama-4]</span>',
      sepedi: 'Šetša reaction ye: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Balela bophahlo bja kgase ya <span class="math-formula">O₂</span> yeo e nyakegago go STP go tšweletša <span class="math-formula">36 g</span> ya meetse. <span class="marks-tag">[Meputso e 4]</span>',
      setswana: 'Ela tlhoko reaction e: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Balela bolumo jwa gase ya <span class="math-formula">O₂</span> e e tlhokegang mo STP go dira <span class="math-formula">36 g</span> ya metsi. <span class="marks-tag">[Maduo a le 4]</span>',
      sesotho: 'Hlahloba reaction ena: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Bala bolumo ea khase ea <span class="math-formula">O₂</span> e hlokahalang ho STP ho hlahisa <span class="math-formula">36 g</span> ea metsi. <span class="marks-tag">[Matshwao a 4]</span>',
      afrikaans: 'Beskou die reaksie: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Bereken die volume <span class="math-formula">O₂</span>-gas benodig by STD om <span class="math-formula">36 g</span> water te produseer. <span class="marks-tag">[4 punte]</span>',
      xitsonga: 'Xiya reaction leyi: <span class="math-formula">2H₂ + O₂ → 2H₂O</span>. Hlayela vholumo ya gasi ya <span class="math-formula">O₂</span> leyi lavekaka eka STP ku humesa <span class="math-formula">36 g</span> ya mati. <span class="marks-tag">[Timaraka ta 4]</span>'
    },
    explanations: {
      isizulu: '<strong>Incazelo nge-isiZulu:</strong> I-Molar mass ka-<span class="math-formula">H₂O = 18 g/mol</span>. Amamole ka-<span class="math-formula">H₂O = 36 / 18 = 2 mol</span>. Ngokwe-ratio <span class="math-formula">2H₂O : 1O₂</span>, sidinga u-1 mol ka-<span class="math-formula">O₂</span>. E-STP, i-molar volume ingu-<span class="math-formula">22.4 dm³/mol</span>. Ngakho: <span class="math-formula">Volume = 1 · 22.4 = 22.4 dm³</span>.',
      isixhosa: '<strong>Inkcazo nge-isiXhosa:</strong> I-Molar mass ye-<span class="math-formula">H₂O = 18 g/mol</span>. Amanani e-moles ka-<span class="math-formula">H₂O = 36 / 18 = 2 mol</span>. Ngokwe-ratio, sidinga u-1 mol we-<span class="math-formula">O₂</span>. Kwi-STP, i-volume = <span class="math-formula">22.4 dm³</span>.',
      sepedi: '<strong>Tlhaloso ka Sepedi:</strong> Molar mass ya <span class="math-formula">H₂O = 18 g/mol</span>. Moles tša meetse = <span class="math-formula">36 / 18 = 2 mol</span>. Ratio ke 2:1, ka gona re nyaka 1 mol ya <span class="math-formula">O₂</span>. Go STP, bophahlo ke <span class="math-formula">22.4 dm³</span>.',
      setswana: '<strong>Tlhaloso ka Setswana:</strong> Molar mass ya <span class="math-formula">H₂O = 18 g/mol</span>. Moles tsa metsi = <span class="math-formula">36 / 18 = 2 mol</span>. Re tlhoka 1 mol wa <span class="math-formula">O₂</span>. Mo STP, bolumo ke <span class="math-formula">22.4 dm³</span>.',
      sesotho: '<strong>Tlhaloso ka Sesotho:</strong> Molar mass ea <span class="math-formula">H₂O = 18 g/mol</span>. Moles tsa metsi = <span class="math-formula">36 / 18 = 2 mol</span>. Re hloka 1 mol ea <span class="math-formula">O₂</span>. Ho STP, bolumo ke <span class="math-formula">22.4 dm³</span>.',
      afrikaans: '<strong>Verduideliking in Afrikaans:</strong> Molêre massa van <span class="math-formula">H₂O = 18 g/mol</span>. Mol water = <span class="math-formula">36 / 18 = 2 mol</span>. Verhouding is 2:1, so ons benodig 1 mol <span class="math-formula">O₂</span>. By STD is volume = <span class="math-formula">22.4 dm³</span>.',
      xitsonga: '<strong>Nhlamuselo hi Xitsonga:</strong> Molar mass ya <span class="math-formula">H₂O = 18 g/mol</span>. Moles ya mati = <span class="math-formula">36 / 18 = 2 mol</span>. Hi lava 1 mol wa <span class="math-formula">O₂</span>. Eka STP, vholumo i <span class="math-formula">22.4 dm³</span>.'
    }
  }
};

let currentSubject = 'maths';
let currentLang = 'isizulu';
const subjectOrder = ['maths', 'physics', 'chemistry'];

function updateSimulator(direction) {
  const data = sampleQuestions[currentSubject];
  const origEl = document.getElementById('sim-original-text');
  const transEl = document.getElementById('sim-translated-text');
  const explEl = document.getElementById('sim-explanation-box');
  const titleEl = document.getElementById('sim-question-title');
  const targetBadge = document.getElementById('sim-target-badge');

  // Directional slide animation on comparison boxes
  const simBoxes = document.querySelectorAll('.sim-box');
  if (direction && simBoxes.length > 0) {
    simBoxes.forEach(box => {
      box.classList.remove('slide-from-right', 'slide-from-left');
      void box.offsetWidth; // Force reflow
      box.classList.add(direction === 'forward' ? 'slide-from-right' : 'slide-from-left');
    });
  }

  if (titleEl) titleEl.textContent = data.title;
  if (origEl) origEl.innerHTML = data.english;
  if (transEl) transEl.innerHTML = data.translations[currentLang] || data.translations['isizulu'];
  if (explEl) explEl.innerHTML = data.explanations[currentLang] || data.explanations['isizulu'];
  
  if (targetBadge) {
    const langNames = {
      isizulu: 'isiZulu Translation',
      isixhosa: 'isiXhosa Translation',
      sepedi: 'Sepedi Translation',
      setswana: 'Setswana Translation',
      sesotho: 'Sesotho Translation',
      afrikaans: 'Afrikaans Vertaling',
      xitsonga: 'Xitsonga Translation'
    };
    targetBadge.textContent = langNames[currentLang] || 'Home Language';
  }
}

// --- 2. 3D WEBGL GRAPHICS (Three.js Monochrome Wireframe) ---
function init3DHero() {
  const canvas = document.getElementById('canvas3d');
  if (!canvas) return;

  const wrapper = canvas.parentElement;
  let width = wrapper.clientWidth || 500;
  let height = wrapper.clientHeight || 500;

  if (typeof THREE !== 'undefined') {
    initThreeJSMonochrome(canvas, width, height);
  } else {
    initProcedural3DMonochrome(canvas, width, height);
  }
}

function initThreeJSMonochrome(canvas, width, height) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 7.5;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Outer Mathematical Wireframe Polyhedron (Stark White)
  const outerGeo = new THREE.IcosahedronGeometry(2.3, 1);
  const outerMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
    roughness: 0.1,
    metalness: 0.9
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  scene.add(outerMesh);

  // Inner Dark Solid Core
  const innerGeo = new THREE.DodecahedronGeometry(1.2, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    roughness: 0.4,
    metalness: 0.9,
    emissive: 0x27272a,
    emissiveIntensity: 0.2
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  // Precision Ring 1
  const ring1Geo = new THREE.TorusGeometry(3.1, 0.025, 16, 120);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  scene.add(ring1);

  // Precision Ring 2
  const ring2Geo = new THREE.TorusGeometry(3.3, 0.02, 16, 120);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa1a1aa, transparent: true, opacity: 0.4 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.y = Math.PI / 4;
  scene.add(ring2);

  // Floating Monochrome Particle Cloud
  const particleCount = 160;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 11;
    positions[i + 1] = (Math.random() - 0.5) * 11;
    positions[i + 2] = (Math.random() - 0.5) * 11;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.065,
    color: 0xffffff,
    transparent: true,
    opacity: 0.6
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Pure White Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const keyLight = new THREE.PointLight(0xffffff, 2.5, 40);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.PointLight(0x71717a, 1.5, 40);
  fillLight.position.set(-5, -5, 3);
  scene.add(fillLight);

  // Mouse Tracking
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    outerMesh.rotation.x += 0.003;
    outerMesh.rotation.y += 0.005;

    innerMesh.rotation.x -= 0.004;
    innerMesh.rotation.y -= 0.004;

    ring1.rotation.z += 0.005;
    ring2.rotation.x += 0.003;

    particles.rotation.y += 0.0006;

    scene.rotation.y = targetX * 0.35;
    scene.rotation.x = -targetY * 0.35;

    renderer.render(scene, camera);
  }
  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    const newW = canvas.parentElement.clientWidth;
    const newH = canvas.parentElement.clientHeight;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  });
}

// Fallback Procedural 3D Canvas (Monochrome)
function initProcedural3DMonochrome(canvas, width, height) {
  const ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;

  const nodes = [
    {x: -1, y: -1, z: -1}, {x: 1, y: -1, z: -1}, {x: 1, y: 1, z: -1}, {x: -1, y: 1, z: -1},
    {x: -1, y: -1, z: 1}, {x: 1, y: -1, z: 1}, {x: 1, y: 1, z: 1}, {x: -1, y: 1, z: 1},
    {x: 0, y: -1.6, z: 0}, {x: 0, y: 1.6, z: 0}, {x: -1.6, y: 0, z: 0}, {x: 1.6, y: 0, z: 0}
  ];

  let angleX = 0;
  let angleY = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angleX += 0.008;
    angleY += 0.012;

    const scale = 110;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const projected = nodes.map(n => {
      let y = n.y * Math.cos(angleX) - n.z * Math.sin(angleX);
      let z = n.y * Math.sin(angleX) + n.z * Math.cos(angleX);
      let x = n.x * Math.cos(angleY) + z * Math.sin(angleY);
      z = -n.x * Math.sin(angleY) + z * Math.cos(angleY);

      const pz = z + 3.5;
      return {
        x: cx + (x / pz) * scale * 2.2,
        y: cy + (y / pz) * scale * 2.2,
        pz: pz
      };
    });

    // Monochrome Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const dx = projected[i].x - projected[j].x;
        const dy = projected[i].y - projected[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.stroke();
        }
      }
    }

    // Pure White & Silver Nodes
    projected.forEach((p, idx) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = idx % 2 === 0 ? '#ffffff' : '#a1a1aa';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }
  render();
}

// --- 3. DOM & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  // Init 3D Scene
  init3DHero();

  // Navbar Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Sample Question Selector Buttons (Directional Tab Transitions)
  const sampleBtns = document.querySelectorAll('.sample-btn');
  sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newSubject = btn.getAttribute('data-subject') || 'maths';
      if (newSubject === currentSubject) return;

      const prevIdx = subjectOrder.indexOf(currentSubject);
      const newIdx = subjectOrder.indexOf(newSubject);
      const direction = newIdx > prevIdx ? 'forward' : 'backward';

      sampleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubject = newSubject;
      updateSimulator(direction);
    });
  });

  // Language Dropdown Selector
  const langSelect = document.getElementById('sim-language-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      currentLang = e.target.value;
      updateSimulator('forward');
    });
  }

  // Toggle AI Explanation
  const explainBtn = document.getElementById('btn-explain');
  const explanationBox = document.getElementById('sim-explanation-box');
  if (explainBtn && explanationBox) {
    explainBtn.addEventListener('click', () => {
      if (explanationBox.style.display === 'none' || !explanationBox.style.display) {
        explanationBox.style.display = 'block';
        explainBtn.textContent = 'Hide Explanation';
      } else {
        explanationBox.style.display = 'none';
        explainBtn.textContent = 'Explain This in My Language';
      }
    });
  }

  // Initialize Simulator with defaults
  updateSimulator();

  // Handle Contact Form Submission
  const ctaForm = document.getElementById('cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = ctaForm.querySelector('input[type="email"]');
      const submitBtn = ctaForm.querySelector('button');
      if (emailInput && emailInput.value) {
        submitBtn.textContent = 'Request Confirmed';
        submitBtn.style.background = '#e4e4e7';
        emailInput.value = '';
        setTimeout(() => {
          submitBtn.textContent = 'Join Early Access';
          submitBtn.style.background = '';
        }, 3500);
      }
    });
  }
});

// ============================================================
// SHARED-ELEMENT DETAIL MODAL & PERSPECTIVE DEPTH SHIFT
// ============================================================
const teamProfiles = {
  bongiwe: {
    name: "Bongiwe Pamella Gama",
    role: "Director",
    title: "Director & Commercial Strategist",
    image: "images/bongiwe.jpg",
    bio: "Bongiwe leads executive governance, commercial sustainability, and strategic partnerships at iFundza AI. She interfaces directly with the Department of Basic Education (DBE), provincial education MECs, and institutional grant partners to champion mother-tongue STEM learning across under-resourced schools in South Africa.",
    skills: ["Institutional Strategy", "DBE Policy Relations", "Commercial Growth", "Public Sector Partnerships", "Executive Governance", "Educational Equity"]
  },
  thabo: {
    name: "Thabo Lubhele",
    role: "AI Software Developer",
    title: "Lead AI Engineer & Full-Stack Architect",
    image: "images/thabo.jpg",
    bio: "Thabo is the lead architect of the iFundza multimodal vision processing pipeline. He fine-tunes Gemini 2.5 Flash for simultaneous mathematical OCR, diagram decomposition, and zero-loss translation across 11 official South African languages, ensuring that complex formulas, scientific constants, and mathematical notations remain 100% intact.",
    skills: ["Multimodal Vision", "Gemini 2.5 Flash", "Formula Guard Engine", "n8n Orchestration", "PostgreSQL / Supabase", "Full-Stack Architecture"]
  },
  noxolo: {
    name: "Noxolo Makhubedu",
    role: "QA & Quality Assurance",
    title: "Lead Quality Assurance Specialist",
    image: "images/noxolo.jpg",
    bio: "Noxolo directs linguistic accuracy audits, automated QA test suites, and curriculum compliance protocols across all 11 official South African languages. Her specialized test suites safeguard against conceptual distortions in translated exam papers, certifying that learners receive scientifically rigorous translations in their home languages.",
    skills: ["Linguistic QA Testing", "CAPS Curriculum Audit", "Automated Test Suites", "Formula Syntax Validation", "11 SA Official Languages", "Zero-Defect Delivery"]
  },
  rowan: {
    name: "Rowan Nkosi",
    role: "Product Manager",
    title: "Head of Product Strategy & UX",
    monogram: "RN",
    bio: "Rowan spearheads product design and technical roadmaps tailored specifically for rural and township learners. He architects the ultra-lightweight WhatsApp bot workflow, allowing students with limited data connectivity or entry-level smartphones to capture photos of exam questions and receive instantaneous explanations in their home languages.",
    skills: ["Product Roadmaps", "WhatsApp Bot Architecture", "Learner-Centric UX", "Low-Bandwidth Optimization", "User Feedback Loops", "Feature Prioritization"]
  },
  angel: {
    name: "Angel Shirindza",
    role: "Business Analyst",
    title: "Educational Data Analyst & Researcher",
    image: "images/angel.jpg",
    bio: "Angel analyzes national matric performance trends, regional language demographics, and student comprehension barriers across rural provinces. Her empirical research directly steers feature prioritization and proves measurable improvements in student STEM pass rates through mother-tongue comprehension.",
    skills: ["CAPS Standards Analysis", "Empirical Data Research", "Matric Pass Rate Trends", "Provincial Demographic Studies", "Impact Assessment", "Model KPI Tracking"]
  }
};

const modalOverlay = document.getElementById('detailModal');

function openDetailModal(memberKey) {
  const data = teamProfiles[memberKey];
  if (!data) return;

  const roleEl = document.getElementById('modalRoleBadge');
  const nameEl = document.getElementById('modalName');
  const titleEl = document.getElementById('modalTitle');
  const bioEl = document.getElementById('modalBio');
  const photoPane = document.getElementById('modalPhotoPane');
  const skillsContainer = document.getElementById('modalSkills');

  if (roleEl) roleEl.textContent = data.role;
  if (nameEl) nameEl.textContent = data.name;
  if (titleEl) titleEl.textContent = data.title;
  if (bioEl) bioEl.textContent = data.bio;

  // Photo Pane - FULL UNCROPPED
  if (photoPane) {
    if (data.image) {
      photoPane.innerHTML = `<img src="${data.image}" alt="${data.name}" id="modalPhotoImg">`;
    } else {
      photoPane.innerHTML = `<div class="modal-monogram-box">${data.monogram}</div>`;
    }
  }

  // Skills
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = skill;
      skillsContainer.appendChild(tag);
    });
  }

  // 1. Perspective Depth Shift on Background
  document.body.classList.add('modal-active');

  // 2. Open Modal with smooth spring transition
  if (modalOverlay) {
    modalOverlay.style.display = 'flex';
    void modalOverlay.offsetWidth; // Force reflow
    modalOverlay.classList.add('open');
  }

  // Prevent background scroll
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
  }
  document.body.classList.remove('modal-active');
  document.body.style.overflow = '';

  setTimeout(() => {
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  }, 400);
}

function closeModalOnBackdrop(e) {
  if (e.target === modalOverlay) {
    closeDetailModal();
  }
}

// Keyboard ESC to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
    closeDetailModal();
  }
});

// Directional Route Transition
function navigateSmooth(event, destinationUrl, direction) {
  event.preventDefault();
  const overlay = document.getElementById('routeOverlay');
  const wrapper = document.getElementById('page-content-wrapper');

  if (wrapper) {
    if (direction === 'back') {
      wrapper.style.transform = 'translateX(40px)';
      wrapper.style.opacity = '0';
    } else {
      wrapper.style.transform = 'translateX(-40px)';
      wrapper.style.opacity = '0';
    }
  }

  if (overlay) {
    overlay.classList.add('active');
  }

  setTimeout(() => {
    window.location.href = destinationUrl;
  }, 350);
}
