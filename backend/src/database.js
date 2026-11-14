import 'dotenv/config';

import { PrismaClient as PostgresPrismaClient } from '../generated/prisma/index.js';
import { PrismaClient as SqlitePrismaClient } from '../generated/sqlite/index.js';

const isSqlite = process.env.DATABASE_URL?.startsWith('file:');

export const PrismaClient = isSqlite ? SqlitePrismaClient : PostgresPrismaClient;
