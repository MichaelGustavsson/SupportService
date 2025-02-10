export class User {
  constructor(email, caption, description) {
    this.email = email;
    this.caption = caption;
    this.description = description;
    this.issueDate = Date.now;
    this.issueNumber = 1;
  }
}
