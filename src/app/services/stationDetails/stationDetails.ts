export interface StationDetails {
    stationFullName: string;
    stationCode: string;
    trainCode: string;
    trainDate: string;
    origin: string;
    destination: string;
    originTime: string;
    destinationTime: string;
    staLastLocationTus: string;
    dueIn: number;
    late: number;
    expectedArrival: string;
    expectedDeparture: string;
    scheduledArrival: string;
    scheduledDeparture: string;
    trainType: string;
    locationType: string;
}
