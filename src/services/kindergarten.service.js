
export default async function KindergartenSrvice (at_point) {
try{
return await fetch("https://my-json-server.typicode.com/shimonzhion/JSON2/"+at_point).then(response=>response.json())
}
catch(error){
    console.log(error);
}
}