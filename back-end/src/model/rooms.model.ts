// rooms.model.ts
export interface Rooms {
    code: number;
    number: string;
    floor: string;
    block: string;
  }
  
  export interface RoomsService {
    getAllRooms(): Promise<Rooms[]>;
    createRoom(data: { number: string; floor: string; block: string }): Promise<Rooms>;
  }
  