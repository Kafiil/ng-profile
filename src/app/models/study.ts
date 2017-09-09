export class Study {
    image: string;
    school: string;
    degree: string;
    period: string;
    details: string;
    link: string;

    public static orderStudyAsc(a: Study, b: Study): number {
        return this.yearFromPeriod(a) - this.yearFromPeriod(b);
    }

    public static orderStudyDesc(a: Study, b: Study): number {
        return -1 * Study.orderStudyAsc(a, b);
    }

    static yearFromPeriod(a): number {
        return parseInt(a.period.split(' ')[0], 10);
    }

}
