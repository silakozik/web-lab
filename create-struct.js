const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');

const files = [
  'components/layout/Header.tsx',
  'components/layout/Footer.tsx',
  'components/ui/Button.tsx',
  'components/ui/Input.tsx',
  'components/ui/Card.tsx',
  'components/ui/Alert.tsx',
  'components/sections/Hero.tsx',
  'components/sections/About.tsx',
  'components/sections/Skills.tsx',
  'components/sections/ProjectList.tsx',
  'components/sections/ContactSection.tsx',
  'components/forms/ProjectFilter.tsx',
  'components/forms/ContactForm.tsx',
];

files.forEach(file => {
  const fullPath = path.join(srcDir, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  
  if (!fs.existsSync(fullPath)) {
    const name = path.basename(file, '.tsx');
    fs.writeFileSync(fullPath, `import React from 'react';\n\nconst ${name} = () => {\n  return (\n    <div>${name}</div>\n  );\n};\n\nexport default ${name};\n`);
  }
});

console.log('Structure created successfully.');
