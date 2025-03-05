export class RowClass {
  child: null[];
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;

  constructor(
    rowName: string,
    salary: number,
    equipmentCosts: number,
    overheads: number,
    estimatedProfit: number,
    id = Math.random(),
    machineOperatorSalary = 0,
    mainCosts = 0,
    materials = 0,
    mimExploitation = 0,
    supportCosts = 0,
    total = 0,
    child = [null]
  ) {
    this.child = child;
    this.equipmentCosts = equipmentCosts;
    this.estimatedProfit = estimatedProfit;
    this.id = id;
    this.machineOperatorSalary = machineOperatorSalary;
    this.mainCosts = mainCosts;
    this.materials = materials;
    this.mimExploitation = mimExploitation;
    this.overheads = overheads;
    this.rowName = rowName;
    this.salary = salary;
    this.supportCosts = supportCosts;
    this.total = total;
  }
}

