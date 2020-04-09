export const project = {
    name: 'manage'
};

export function isProcessDev() {
  return process.env.NODE_ENV==='development';
}
