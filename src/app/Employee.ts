import { first } from 'rxjs/operators';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  gender: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    emailId: string,
    gender: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  public getId(): number {
    return this.id;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getEmailId(): string {
    return this.emailId;
  }
  public getGender(): string {
    return this.gender;
  }
}
