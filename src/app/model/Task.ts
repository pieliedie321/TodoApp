export class Task {
    value: string;
    isDone: boolean = false;

    public constructor(value: string, isDone: boolean) {
        this.value = value;
        this.isDone = isDone;
    }

    invertIsDoneFlag() {
        this.isDone = !this.isDone;
    }
}