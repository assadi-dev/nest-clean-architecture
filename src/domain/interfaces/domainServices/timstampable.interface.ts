export default interface Timestampable {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
