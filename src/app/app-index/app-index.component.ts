import { Component, OnInit } from '@angular/core';
import { DotNetClassModel } from '../models/dotnet-class-model';
import { SelectorModel } from '../models/selector-model';

@Component({
  selector: 'po-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.scss']
})
export class AppIndexComponent implements OnInit {

  public get interfaceCode(): string {
    return "public interface ITestKlasse\n{\n    Backfisch;\n}"
  }

  public get implementationCode(): string {
    return "public class TestKlasse\n{\n    Backfisch;\n}"
  }

  public get factoryMethodCode(): string {
    return "public class TestKlasse\n{\n    Backfisch;\n}"
  }

  public namespaceName?: string;
  public className?: string;
  public baseClassName = "PageObjectBase";

  public classModel = new DotNetClassModel();

  constructor() { }

  public ngOnInit(): void {
  }

  public addSelector(): void {
    this.classModel.selectors.push(new SelectorModel());
  }

  public deleteSelector(selector: SelectorModel): void {
    const index = this.classModel.selectors.indexOf(selector);
    if (index > -1) {
      this.classModel.selectors.splice(index, 1);
    }
  }

}
