const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const addPerson = async (req=request, res=response)=> {

    // const email = req.body.email;
    // const password = req.body.password;

    const {name, lastName, published, userId} = req.body;

    const result = await prisma.persons.create({
        data:{
            name,
            lastName,
            published,
            userId
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=> {
        await prisma.$disconnect();
    });

    res.status(201).json({
        result
    });
};

const ShowPersons = async(req=request, res=response)=> {

    const persons = await prisma.persons.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=> {
        await prisma.$disconnect();
    });

    res.status(200).json({persons});
};

const ShowPerson = async(req=request, res=response)=> {

    const {id} = req.params;
    const result = await prisma.persons.findFirst({
        where:{
            id: Number(id)
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=> {
        await prisma.$disconnect();
    });

    res.status(200).json({result});
};

const UpdatePerson =async(req=request, res=response)=> {
    
    const {id} = req.params;
    const {name, lastName, published, userId} = req.body;
    const result = await prisma.persons.update({
        where:{
            id: Number(id)
        },
        data: {
            name,
            lastName,
            published,
            userId
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=> {
        await prisma.$disconnect();
    });

    res.status(202).json({
        result
    });
};

const DeletePerson = async(req=request, res=response)=> {
    const {id} = req.params;
    const result = await prisma.persons.delete({
        where:{
            id: Number(id)
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=> {
        await prisma.$disconnect();
    });

    res.status(204).json({
        result
    });
};

module.exports = {
    addPerson,
    ShowPersons,
    UpdatePerson,
    DeletePerson,
    ShowPerson
}

