import { Injectable } from '@angular/core';
import { DotNetClassModel } from '../models/dotnet-class-model';
import { SelectorModel } from '../models/selector-model';
import { BaseCodeService } from './base-code.service';

@Injectable({
  providedIn: 'root'
})
export class ImplementationCodeService {

  constructor(
    private readonly _baseCodeService: BaseCodeService
  ) { }

  public generateCode(dotnetClassModel: DotNetClassModel): string {
    let code = "";

    if (!dotnetClassModel.className) {
      return "Please set a class name.";
    }

    if (dotnetClassModel.baseClassName) {
      code += `public class ${dotnetClassModel.className} : ${dotnetClassModel.baseClassName}\n`;
    }
    else {
      code += `public class ${dotnetClassModel.className}\n`;
    }

    code += `{\n`;
    code += this.generateClassBody(dotnetClassModel);
    code += `}\n`;
    
    return code;
  }

  private generateClassBody(classModel: DotNetClassModel): string {
    let code = "";
    if (!this.validateSelectors(classModel.selectors)) {
      return "Selectors are not valid. Please check for duplicates.";
    }

    for (const selector of classModel.selectors) {
      code += this.generateSelectorProperty(selector);
    }
    code += "\n";
    for (const selector of classModel.selectors) {
      if (selector.generateLocator) {
        code += this.generateLocator(selector);
      }
    }
    if (classModel.selectors.find((selector) => selector.generateLocator && selector.selector && selector.propertyName)) {
      code += "\n";
    }
    if (classModel.baseClassName) {
      code += `    public class ${classModel.className}(IPage page) : base(page)\n`;
    }
    else {
      code += `    public class ${classModel.className}(IPage page)\n`;
    }
    code += `    {\n`;
    for (const selector of classModel.selectors) {
      if (selector.generateLocator && selector.selector && selector.propertyName) {
        code += `        ${selector.propertyName}Locator = page.Locator(${selector.propertyName});\n`;
      }
    }
    code += `    }\n`;
    code += "\n";
    for (const selector of classModel.selectors) {
      if (selector.generateIsVisibleAsync) {
        code += this.generateIsVisibleMethod(selector);
      }
    }
    for (const selector of classModel.selectors) {
      if (selector.generateClickAsync) {
        code += this.generateClickMethod(selector);
      }
    }
    return code;
  }

  private generateLocator(selector: SelectorModel) {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    return `    public ILocator ${selector.propertyName}Locator;\n`;
  }

  private generateSelectorProperty(selector: SelectorModel): string {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    if (selector.useSelfSelector) {
      return `    public string ${selector.propertyName} { get => $"{SelfSelector} ${selector.selector}"; }\n`;
    }
    return `    public string ${selector.propertyName} { get => $"${selector.selector}"; }\n`;
  }
  
  private generateIsVisibleMethod(selector: SelectorModel): string {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    let code = "";
    code += `    public async Task<bool> Is${selector.propertyName}VisibleAsync()\n`;
    code += `    {\n`;
    code += `        return await Page.IsVisibleAsync(${selector.propertyName});\n`;
    code += `    }\n`;
    code += "\n";
    return code;
  }
  
  private generateClickMethod(selector: SelectorModel): string {
    if (!selector.selector || !selector.propertyName) {
      return "";
    }

    let code = "";
    if (selector.navigationPageObjectName) {
      code += `    public async Task<${selector.navigationPageObjectName}> Click${selector.propertyName}Async()\n`;
    }
    else {
      code += `    public async Task Click${selector.propertyName}Async()\n`;
    }
    code += `    {\n`;
    if (selector.navigationPageObjectName) {
      code += `        await Page.ClickAsync(${selector.propertyName});\n`;
      code += `        return new ${selector.navigationPageObjectName}(Page);\n`;
    }
    else {
      code += `        return await Page.ClickAsync(${selector.propertyName});\n`;
    }
    code += `    }\n`;
    code += "\n";
    return code;
  }

  private validateSelectors(selectors: SelectorModel[]): boolean {
    const selectorNamesArray = selectors.map((selector) => selector.selector);
    const selectorPropertyNamesArray = selectors.map((selector) => selector.propertyName);

    const selectorNamesSet = new Set(selectorNamesArray);
    const selectorPropertyNamesSet = new Set(selectorPropertyNamesArray);

    return selectorNamesSet.size === selectorNamesArray.length && selectorPropertyNamesSet.size === selectorPropertyNamesArray.length;
  }
}
