
export class Study {

    image: string;
    school: string;
    degree: string;
    period: string;
    details: string;
    link: string;

    public  static orderStudyAsc(firstPeriod: string, secondPeriod: string): number {
        return this.yearFromPeriod(firstPeriod) - this.yearFromPeriod(secondPeriod);
    }

    public static orderStudyDesc(firstPeriod: string, secondPeriod: string) {
        return -1 * this.orderStudyAsc(firstPeriod, secondPeriod);
    }

    private static yearFromPeriod(period: string): number {
        return parseInt(period.split(' ')[0], 0);
    }

}
