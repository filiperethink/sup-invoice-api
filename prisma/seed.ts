import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const embassadors = [
  {
    name: "Filipe",
    surname: "Prado",
    email: "filipe.prado@rethink.dev",
  },
  {
    name: "Leticia",
    surname: "Lange",
    email: "leticia.lange@rethink.dev",
  },
  {
    name: "Priscila",
    surname: "Ritschel",
    email: "priscila.ritschel@rethink.dev",
  },
];

const students = [
  {
    name: "Amanda",
    surname: "Duarte",
    email: "amanda.duarte@rethink.dev",
  },
  {
    name: "Gabriel",
    surname: "Melo",
    email: "gabriel.melo@rethink.dev",
  },
  {
    name: "Ana",
    surname: "Ramos",
    email: "ana.ramos@rethink.dev",
  },
  {
    name: "Felipe",
    surname: "Reggiane",
    email: "felipe.reggiane@rethink.dev",
  },
  {
    name: "Fernando",
    surname: "Henrique",
    email: "fernando.henrique@rethink.dev",
  },
  {
    name: "Fabiana",
    surname: "Kamo",
    email: "fabiana.kamo@rethink.dev",
  },
  {
    name: "Carolina",
    surname: "Valeriano ",
    email: "carolina.valeriano@rethink.dev",
  },
  { name: "Lucas", surname: "Araujo", email: "lucas.paula@rethink.dev" },
  {
    name: "Sthéphany",
    surname: "Tezza",
    email: "sthephany.tezza@rethink.dev",
  },
];
async function main() {
  students.forEach(async (student) => {
    await prisma.user.create({
      data: {
        name: student.name,
        surname: student.surname,
        email: student.email,
      },
    });
  });
  embassadors.forEach(async (embassador) => {
    await prisma.user.create({
      data: {
        name: embassador.name,
        surname: embassador.surname,
        email: embassador.email,
        role: "EMBASSADOR",
      },
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
