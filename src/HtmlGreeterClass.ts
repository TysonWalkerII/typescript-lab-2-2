import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName?: string) {
    super(greeting);
    this.tagName = "h1";
  }
  greet(name: string) {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}
