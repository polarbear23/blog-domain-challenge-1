const { PrismaClient } = require('@prisma/client');
const { getPrismaClient } = require('@prisma/client/runtime');
const prisma = new PrismaClient();

async function seed() {
    const createdUser1 = await prisma.user.create({
        data:
        {
            username: 'alicemart',
            email: "alice@gmail.com",
            profile: {
                create: {
                    age: 25,
                    pictureURL: "aogaoeugbaobg.com/pic",
                    bio: "aeoighnaogibaoeubgaehasheyrbreyzsrhjjr",
                    post: {
                        create: {
                            title: "take a look at this cute cat",
                            content: "wow its so cute so cute so cute this siamese cat and this siberian",
                            pictureURL: "www.cutecats.com/siberiansiamesekitties",
                            isPublished: true,
                            Comment: {
                                create: {
                                    content: "amazing cat bro!"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    );

    const createdUser2 = await prisma.user.create({
        data: {
            username: 'bobmartin', email: "bob@gmail.com", profile: {
                create: {
                    age: 30,
                    pictureURL: "aogaoe535aobg.com/pic",
                    bio: "aeoig43636aoeubgaehash4536jjr"
                }
            }
        }
    }
    )
    console.log(`user created`, createdUser1);

    // Add your code here

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })