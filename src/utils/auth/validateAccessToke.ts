import { GraphQLClientSingleton } from "app/graphql"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

export const validateAccessToken = async () => {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')?.value
  
    if(accessToken) { 
      const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
      const { customer } = await graphqlClient.request(customerName, {
        customerAccessToken: accessToken
      })
      if(customer?.firstName) { //otra condicional por si acaso xd
        return customer; 
      }   
    }
  }