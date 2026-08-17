const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

export const logger = {
  info: (msg, ...args) => console.log(`${colors.cyan}[INFO]${colors.reset} ${msg}`, ...args),
  success: (msg, ...args) => console.log(`${colors.green}✔ [SUCCESS]${colors.reset} ${msg}`, ...args),
  warn: (msg, ...args) => console.log(`${colors.yellow}⚠ [WARN]${colors.reset} ${msg}`, ...args),
  error: (msg, ...args) => console.log(`${colors.red}✖ [ERROR]${colors.reset} ${msg}`, ...args),
  section: (title) => {
    console.log('\n' + '='.repeat(70));
    console.log(`${colors.bright}${colors.cyan}  ${title}${colors.reset}`);
    console.log('='.repeat(70));
  },
  subSection: (title) => {
    console.log(`\n${colors.bright}${colors.blue}--- ${title} ---${colors.reset}`);
  },
  table: (data) => console.table(data),
  progress: (current, total, name) => {
    const percent = Math.round((current / total) * 100);
    const bar = '█'.repeat(Math.floor(percent / 4)) + '░'.repeat(25 - Math.floor(percent / 4));
    process.stdout.write(`\r${colors.magenta}[PROGRESS]${colors.reset} [${bar}] ${percent}% (${current}/${total}) - ${name.padEnd(25)}`);
    if (current === total) console.log();
  }
};
