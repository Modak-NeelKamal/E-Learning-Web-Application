const PrismaClient = require("@prisma/client").PrismaClient;

const database = new PrismaClient();

async function main() {
  try {
    await database.category.deleteMany();
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error sending the database category", error);
  } finally {
    await database.$disconnect();
  }
}

main();
