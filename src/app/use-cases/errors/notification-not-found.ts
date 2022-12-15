export class NotificationNotFound extends Error {
  constructor() {
    // super chama constructor da class Error
    super('Notification not found.');
  }
}
