import { Module, CacheModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { MesaModule } from './mesa/mesa.module';
import { AuthModule } from './auth/auth.module';
import { OptionModule } from './option/option.module';
// import { OptionModule } from './option/option.module';

// import * as redisStore from 'cache-manager-redis-store';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    MenuModule,
    MesaModule,
    OptionModule,
    AuthModule,
    // ConfigModule.forRoot(),
    // CacheModule.register({
    //   isGlobal: true,
    //   store: redisStore,
    //   host: process.env.REDIS_HOST,
    //   port: process.env.REDIS_PORT,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
