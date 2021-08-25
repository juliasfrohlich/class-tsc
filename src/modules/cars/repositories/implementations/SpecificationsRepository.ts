import { ISpecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";
import { Specification } from "../../entities/Specification"
import { getRepository, Repository } from "typeorm";

class SpecificationsRepository implements ISpecificationsRepository {
  
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification)
  }


  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )

    return specification
  }
}

export { SpecificationsRepository }