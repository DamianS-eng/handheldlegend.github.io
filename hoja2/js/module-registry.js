export async function registerSettingsModules() {
  const moduleConfigs = [
    {
      name: 'Gamepad',
      path: '../modules/gamepad-md.js',
      icon: 'gamepad.svg',
      color: '#4FB0C6'  // Teal (primary accent)
    },
    {
      name: 'Remap',
      path: '../modules/remap-md.js',
      icon: 'remap.svg',
      color: '#6E4EC8'  // Indigo
    },
    {
      name: 'Joysticks',
      path: '../modules/analog-md.js',
      icon: 'analog.svg',
      color: '#C34EB8'  // Violet‑magenta
    },
    {
      name: 'RGB',
      path: '../modules/rgb-md.js',
      icon: 'rgb.svg',
      color: '#C84E6C'  // Raspberry
    },
    {
      name: 'Triggers',
      path: '../modules/trigger-md.js',
      icon: 'triggers.svg',
      color: '#D56E4E'  // Coral
    },
    {
      name: 'Motion',
      path: '../modules/motion-md.js',
      icon: 'motion.svg',
      color: '#E5C64E'  // Mustard
    },
    {
      name: 'Haptics',
      path: '../modules/haptic-md.js',
      icon: 'haptics.svg',
      color: '#AFCB4E'  // Lime
    },
    {
      name: 'User',
      path: '../modules/user-md.js',
      icon: 'user.svg',
      color: '#4ECB6F'  // Mint
    },
    {
      name: 'Battery',
      path: '../modules/battery-md.js',
      icon: 'battery.svg',
      color: '#4EC7B0'  // Aqua‑green
    },
    {
      name: 'Wireless',
      path: '../modules/wireless-md.js',
      icon: 'wireless.svg',
      color: '#4EC0C7'  // Sky‑blue
    },
  ];

  return moduleConfigs;
}
