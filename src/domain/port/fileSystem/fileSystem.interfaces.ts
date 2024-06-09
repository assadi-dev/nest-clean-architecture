export default interface FileSystem {
  getMimeType(file: File): string;
  move(file: File, destination: string): void;
  copy(file: File, destination: string): void;
  delete(file: File): void;
}
