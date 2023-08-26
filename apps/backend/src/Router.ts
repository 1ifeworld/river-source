import { ponder } from "@/generated";

ponder.on("Router:DataOverwritten", async ({event, context})=> {
const {TokenStorage } = context.entities;

const dataOverWritten = await TokenStorage.upsert({
  id: `${event.params.press}-${event.params.ids}`, // need to think about this more 
  create: {
    sender: event.params.sender,
    press: event.params.press,
    ids: [...event.params.ids],
    response: event.params.response,
    schema: event.params.schema
  },
  update: {
    response: event.params.response,
  }

})
});

ponder.on("Router:DataRemoved", async ({event, context})=> {
  const {TokenStorage } = context.entities;
  
  const dataRemoved = await TokenStorage.update({
    id: `${event.params.press}-${event.params.ids}`,
    data: {
     sender: event.params.sender,
     press: event.params.press,
     ids: [...event.params.ids]
    }
  })
  });

ponder.on("Router:DataSent", async ({event, context})=> {
  const {TokenStorage } = context.entities;
  
  const dataSent = await TokenStorage.create({
    id: `${event.params.press}-${event.params.ids}`,
    data: {
      sender: event.params.sender,
      press: event.params.press,
      ids: [...event.params.ids],
      response: event.params.response,
      schema: event.params.schema
    }
  })
  });

ponder.on("Router:OwnershipTransferred", async ({event, context})=> {
  const {TokenStorage } = context.entities;
  
  const ownershipTransferred = await TokenStorage.update({
    id: `${event.params.previousOwner}-${event.params.newOwner}`,
    data: {
      previousOwner: [...event.params.previousOwner],
      newOwner: event.params.newOwner
    }
  })
  });


ponder.on("Router:PressRegistered", async ({event, context})=> {
  const {Router } = context.entities;
  
  const pressRegistered = await Router.create({
    id: `${event.params.sender}-${event.params.factory}`,
    data: {
      sender: event.params.sender,
      factory: event.params.factory,
      newPress: event.params.newPress,
      newPressData: event.params.newPressData,
    }
  })
  });

  ponder.on("Router:PressDataUpdated", async ({event, context}) => {
    const { TokenStorage } = context.entities;
    
    const pressDataUpdated = await TokenStorage.upsert({
      id: `${event.params.press}-${event.params.pointer}`,
      create:{
        sender: event.params.sender,
        press: event.params.press,
        pointer: event.params.pointer,
      },
      update:{
        sender: event.params.sender,
        press: event.params.press,
        pointer: event.params.pointer,
      }
    })
    });
