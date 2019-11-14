/**
 * Append or prepend words or sentences to a sentence.
 */
export default class Appender {
  sentence: string

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  getSentence(): string
  {
    return this.sentence;
  }

  append(word: string) {
    this.sentence = this.sentence + ' ' + word;
  }

  prepend(word: string) {
    this.sentence = word + ' ' + this.sentence;
  }
}