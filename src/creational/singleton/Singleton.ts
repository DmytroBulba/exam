export class Singleton {
    private static instance: Singleton;

    private constructor() {
        console.log("Singleton instance created");
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public showMessage(): void {
        console.log("Hello from Singleton!");
    }
}