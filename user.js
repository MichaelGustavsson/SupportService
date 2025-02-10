export class User {
  constructor(email, caption, description) {
    this.email = email;
    this.caption = caption;
    this.description = description;
    this.issueDate = new Date().toLocaleString('sv-SE');
    this.issueNumber = crypto.randomUUID().replaceAll('-', '');
  }
}
