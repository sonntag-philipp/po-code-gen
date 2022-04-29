import { Injectable } from '@angular/core';
import { DotNetClassModel } from '../models/dotnet-class-model';

@Injectable({
  providedIn: 'root'
})
export class BaseCodeService {

  public addNamespace(classModel: DotNetClassModel, content: string): string {
    return "";
  }
}
