import { RecordModel, RecordService } from "pocketbase";

export function serializeCollection(collection: RecordService<RecordModel>): string {
    return JSON.stringify(collection);
}