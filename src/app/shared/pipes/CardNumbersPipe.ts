import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "substring" })
export class LastCardNumbers implements PipeTransform {
  transform(_value: string, _subPoints?: number): string {
    return _value.substring(_value.length - _subPoints);
  }
}
