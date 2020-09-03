export const pizza = `

type Query{
	pizzas: [Pizza!]
}

type Pizza implements Nameable & Imaged @auth(
	passwords: ["password","password2"],
	username: "username"
	data: [{name:"AAA"},{name:"BBB"}]
){
	name: String!
	ingredients: [Ingredient!]
	image: S3Object
	data: DataInfo
}

interface Nameable{
	name: String!
}
interface Imaged{
	name: String!
}
type Ingredient{
	name: String!
	price: Int!
}

type Mutation{
	addPizza(
		pizza : CreatePizza
	): Pizza
	addIngredient(
		ingredient: CreateIngredient
	): Ingredient
}

input CreatePizza{
	name: String! = ""
	pizzasRelated: [String]! = []
	pizzasRelated2: [String]!
	ingredients: [CreateIngredient!] =[{
        name:"",
		price:300,
		sku:{
			name:"13231a"
		}
    },{
        name:"Pineapple",
        price:200
    }]
}
input CreateSKU{
	name: String!
}
input CreateIngredient{
	name: String!
	price: Int!
	sku: CreateSKU
	status: Status!
	statusy: [Status]! = []
}
extend type DataInfo {
	name:String
}
schema{
	query: Query,
	mutation: Mutation
}`;
export const pizzaLibrary = `scalar S3Object


"""
info bout data
"""
type DataInfo {
	createdAt: String!
	more: DataInfo
}

input AuthData {
	name:String = "Hello"
}

enum Status {
	READY
	EATEN
}

directive @auth(
	username:String!
	passwords:[String]!
	data: [AuthData]
) on OBJECT
`;
