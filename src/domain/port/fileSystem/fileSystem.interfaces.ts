export default interface FileSystem {
  getMimeType(file: File): string;
  move(file: File, destination: string): void;
  copy(path: string, destination: string): void;
  delete(path: File): boolean;
}
