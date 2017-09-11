
export class Study {
    image: string;
    school: string;
    degree: string;
    period: string;
    details: string;
    link: string;

    public static orderStudyAsc(a: string, b: string): number {
        return this.yearFromPeriod(a) - this.yearFromPeriod(b);
    }

    public static orderStudyDesc(a: string, b: string) {
        return -1 * this.orderStudyAsc(a, b);
    }


    public static yearFromPeriod(period: string): number {
        return parseInt(period.split(' ')[0], 0);
    }

}
