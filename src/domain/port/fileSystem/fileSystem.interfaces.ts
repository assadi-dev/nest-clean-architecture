export default interface FileSystem {
  getMimeType(file: File): string;
  move(path: string, destination: string): boolean;
  copy(file: File, destination: string): boolean;
  delete(file: File): boolean;
  save(file: File, path: string): boolean;
  rename(path: string, filename: string): boolean;
  getExtension(file: File): string;
}
